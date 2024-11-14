/// IMPORTS ///

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, Keyboard, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


/// CONSTS ///

// Calculate time phase points, in minutes past midnight
// Using https://www.npmjs.com/package/suncalc
function getDecimalHour(date: Date): number {
  return (date.getHours() * 60) + date.getMinutes();
}

const date = new Date();
const latitude = 51.5;
const longitude = -0.1;

import SunCalc from 'suncalc';
import Button from '@/components/Button';
const times = SunCalc.getTimes(date, latitude, longitude);

const nightendTime = getDecimalHour(times.nightEnd);
const dawnTime = getDecimalHour(times.dawn);
const sunrise = getDecimalHour(times.sunrise);
const morningTime = getDecimalHour(times.goldenHourEnd);
const afternoonTime = getDecimalHour(times.solarNoon);
const sunsetTime = getDecimalHour(times.sunsetStart);
const duskTime = getDecimalHour(times.dusk);
const nightTime = getDecimalHour(times.night);
const midnightTime = 1440;

const TIME_PHASES = [
  { name: "Midnight", time: 0 }, // no clue if that actually does shit
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

console.log('NightEnd', nightendTime);
console.log('Dawn:', dawnTime);
console.log('Sunrise:', sunrise);
console.log('Morning:', morningTime);
console.log('Afternoon:', afternoonTime);
console.log('Sunset:', sunsetTime);
console.log('Dusk:', duskTime);
console.log('Night:', nightTime);
console.log('Midnight:', midnightTime);

// Gradients for different daytimes
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

export default function App() {
  const [gradientOptions, setGradientOptions] = useState({
    colors: GRADIENTS.Midnight,
    start: START_DEFAULT,
    end: END_DEFAULT,
  });
  
  const [timeInput, setTimeInput] = useState(""); // Input state for user input

  // Helper to convert hex to RGB
  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [bigint >> 16 & 255, bigint >> 8 & 255, bigint & 255];
  };

  // Helper to convert RGB back to hex
  const rgbToHex = (rgb: any[]) => `#${rgb.map((x: { toString: (arg0: number) => string; }) => x.toString(16).padStart(2, '0')).join('')}`;

  // Linear interpolate between two color arrays
  const interpolateColors = (startColors: any[], endColors: { [x: string]: { [x: string]: number; }; }, factor: number) => {
    return startColors.map((startColor: any[], index: string | number) =>
      rgbToHex(startColor.map((startChannel: number, channelIndex: string | number) =>
        Math.round(startChannel + (endColors[index][channelIndex] - startChannel) * factor)
      ))
    );
  };

  // Get blended gradient based on time input
  const getBlendedGradient = (time: number) => {
    // Handle wraparound by making sure midnight is at both 0 and 1440
    time = (time >= 1440) ? 0 : time;

    // Find the two nearest phases
    let prevPhase = TIME_PHASES[0];
    let nextPhase = TIME_PHASES[TIME_PHASES.length - 1];
    for (let i = 0; i < TIME_PHASES.length - 1; i++) {
      if (time >= TIME_PHASES[i].time && time < TIME_PHASES[i + 1].time) {
        prevPhase = TIME_PHASES[i];
        nextPhase = TIME_PHASES[i + 1];
        break;
      }
    }

    // Calculate interpolation factor between prev and next phases
    const timeDiff = nextPhase.time - prevPhase.time;
    const factor = (time - prevPhase.time) / (timeDiff > 0 ? timeDiff : midnightTime);

    // Get RGB values for colors
    const prevColors = GRADIENTS[prevPhase.name].map(hexToRgb);
    const nextColors = GRADIENTS[nextPhase.name].map(hexToRgb);

    return interpolateColors(prevColors, nextColors, factor);
  };

  // Update gradient when timeInput changes
  useEffect(() => {
    const time = parseInt(timeInput, 10);
    if (!isNaN(time) && time >= 0 && time <= 1440) {
      const newColors = getBlendedGradient(time);
      setGradientOptions((prev) => ({ ...prev, colors: newColors }));
    }
  }, [timeInput]);

  return (
    <LinearGradient
      style={styles.container}
      colors={gradientOptions.colors}
      start={gradientOptions.start}
      end={gradientOptions.end}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>settings</Text>
        <Text style={styles.text}>coming soon!</Text>
        <Text style={styles.mono}>v0.0.1</Text>
        <Text style={styles.mono}>milo tek© 2021</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter time in minutes (0-1440)"
          onChangeText={(text) => setTimeInput(text)}
          onSubmitEditing={Keyboard.dismiss}
          value={timeInput}
        />
        <Pressable onPress={() => setTimeInput("0r")}>
          <Text style={styles.mono}>Clear</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 72,
    fontFamily: 'BEExtraBold',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'BSLight',
  },
  mono: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'BMLight',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 50,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    textAlign: 'center',
  },
});
