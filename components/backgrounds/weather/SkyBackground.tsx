/// IMPORTS ///
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import SunCalc from 'suncalc';

/// CONSTANTS ///

// Debug flag - uses a fixed time for testing
const DEBUG = false;
const DEBUG_TIME = 960;

// Get the current time in minutes past midnight from a date (METHOD NAME NEEDS REFACTORING!!)
function getDecimalHour(date: Date): number {
  return date.getHours() * 60 + date.getMinutes();
}

// Date, time and location for the sun calculations
const date = new Date();
const latitude = 51.5;
const longitude = -0.1;
const times = SunCalc.getTimes(date, latitude, longitude);

// Using https://www.npmjs.com/package/suncalc
const nightendTime = getDecimalHour(times.nightEnd);        //night ends (morning astronomical twilight starts)
const dawnTime = getDecimalHour(times.dawn);                //dawn (morning nautical twilight ends, morning civil twilight starts)
const sunrise = getDecimalHour(times.sunrise);              //sunrise (top edge of the sun appears on the horizon)
const morningTime = getDecimalHour(times.goldenHourEnd);    //morning golden hour (soft light, best time for photography) ends
const afternoonTime = getDecimalHour(times.solarNoon);      //solar noon (sun is in the highest position)
const sunsetTime = getDecimalHour(times.sunset);            //sunset (bottom edge of the sun touches the horizon)
const duskTime = getDecimalHour(times.dusk);                //dusk (evening civil twilight starts)
const nightTime = getDecimalHour(times.night);              //night starts (evening astronomical twilight starts)
const midnightTime = 1440;

console.log('NightEnd', nightendTime);
console.log('Dawn:', dawnTime);
console.log('Sunrise:', sunrise);
console.log('Morning:', morningTime);
console.log('Afternoon:', afternoonTime);
console.log('Sunset:', sunsetTime);
console.log('Dusk:', duskTime);
console.log('Night:', nightTime);
console.log('Midnight:', midnightTime);
console.log(getDecimalHour(new Date())); // current time 4 debug

const TIME_PHASES = [
  { name: "Midnight", time: 0 },
  { name :"NightEnd", time: nightendTime},
  { name: "Dawn", time: dawnTime },
  { name: "Sunrise", time: sunrise },
  { name: "Morning", time: morningTime },
  { name: "Afternoon", time: afternoonTime },
  { name: "Sunset", time: sunsetTime },
  { name: "Dusk", time: duskTime },
  { name: "Night", time: nightTime },
  { name: "Midnight", time: midnightTime }
];

// Gradients for each time phase
const GRADIENTS = {
  NightEnd: ["#0d1427", "#0f244f", "#153f77"],
  Dawn: ["#5d4c83", "#956387", "#c38981"],
  Sunrise: ["#5a8eda", "#a7b0b9", "#eddc83"],
  Morning: ["#61a3f0", "#87c4fb", "#ffe9cd"],
  Afternoon: ["#3b82d2", "#5ea8e8", "#7ebeee"],
  Sunset: ["#7d547e", "#ce5836", "#f6b334"],
  Dusk: ["#3d468a", "#a26574", "#e6813f"],
  Night: ["#0d1427", "#0f244f", "#153f77"],
  Midnight: ["#000000", "#030b1c", "#0c1220"],
};

const START_DEFAULT = { x: 0.5, y: 0 };
const END_DEFAULT = { x: 0.5, y: 1 };

/// COMPONENT ///

const SkyBackground: React.FC<{ timeInput?: number; style?: object }> = ({
  timeInput,
  style,
}) => {
  const [gradientOptions, setGradientOptions] = useState({
    colors: GRADIENTS.Midnight,
    start: START_DEFAULT,
    end: END_DEFAULT,
  });

  useEffect(() => {
    // Determine the time to use based on DEBUG, timeInput, or the current time
    const time = DEBUG
      ? DEBUG_TIME // Debug mode: fixed time
      : timeInput ?? getDecimalHour(new Date());

    const newColors = getBlendedGradient(time);
    setGradientOptions((prev) => ({ ...prev, colors: newColors }));
  }, [timeInput]);

  // Calculate blended gradient
  const getBlendedGradient = (time: number) => {
    time = time >= 1440 ? 0 : time;

    let prevPhase = TIME_PHASES[0];
    let nextPhase = TIME_PHASES[TIME_PHASES.length - 1];
    for (let i = 0; i < TIME_PHASES.length - 1; i++) {
      if (time >= TIME_PHASES[i].time && time < TIME_PHASES[i + 1].time) {
        prevPhase = TIME_PHASES[i];
        nextPhase = TIME_PHASES[i + 1];
        break;
      }
    }

    const timeDiff = nextPhase.time - prevPhase.time;
    //const factor = (time - prevPhase.time) / (timeDiff > 0 ? timeDiff : 1440);
    const factor = Math.pow((time - prevPhase.time) / (timeDiff > 0 ? timeDiff : 1440), 3);

    const prevColors = GRADIENTS[prevPhase.name].map(hexToRgb);
    const nextColors = GRADIENTS[nextPhase.name].map(hexToRgb);

    return interpolateColors(prevColors, nextColors, factor);
  };

  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [bigint >> 16 & 255, bigint >> 8 & 255, bigint & 255];
  };

  const rgbToHex = (rgb: number[]) =>
    `#${rgb.map((x) => x.toString(16).padStart(2, "0")).join("")}`;

  const interpolateColors = (startColors: any[], endColors: any[], factor: number) =>
    startColors.map((startColor, index) =>
      rgbToHex(
        startColor.map((startChannel, channelIndex) =>
          Math.round(startChannel + (endColors[index][channelIndex] - startChannel) * factor)
        )
      )
    );

  return (
    <LinearGradient
      colors={gradientOptions.colors}
      start={gradientOptions.start}
      end={gradientOptions.end}
      style={[{ flex: 1 }, style]}
    >
    </LinearGradient>
  );
};

export default SkyBackground;
