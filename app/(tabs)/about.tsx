import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const START_DEFAULT = { x: 0.5, y: 0 };
const END_DEFAULT = { x: 0.5, y: 1 };
const INTERVAL = 30;  // Interval for smooth animation
const TRANSITION_STEPS = 20;  // Number of steps for color transition

// Gradients for different daytimes
// sourced from: https://tips.clip-studio.com/en-us/articles/3567
const GRADIENTS = {
  Dawn : ["#5d4c83","#956387","#c38981"],
  Sunrise: ["#5a8eda","#a7b0b9","#eddc83"],
  Morning: ["#61a3f0", "#87c4fb", "#ffe9cd"],
  Afternoon: ["#3b82d2", "#5ea8e8", "#7ebeee"],
  Sunset: ["#7d547e", '#ce5836', '#f6b334'],
  Dusk: ["#3d468a", "#a26574", "#e6813f"],
  Night: ["#0d1427", "#0f244f", "#153f77"],
  Midnight: ["#000000", "#030b1c", "#0c1220"],
};

export default function App() {
  const [gradientOptions, setGradientOptions] = React.useState({
    colors: GRADIENTS.Sunrise,
    start: START_DEFAULT,
    end: END_DEFAULT,
  });
  
  const gradientOptionsRef = React.useRef(gradientOptions);
  gradientOptionsRef.current = gradientOptions;

  let timeout;

  // Helper to convert hex to RGB
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [bigint >> 16 & 255, bigint >> 8 & 255, bigint & 255];
  };

  // Helper to convert RGB back to hex
  const rgbToHex = (rgb) => `#${rgb.map(x => x.toString(16).padStart(2, '0')).join('')}`;

  // Function to smoothly transition between colors
  const transitionGradient = (newColors) => {
    const currentColors = gradientOptionsRef.current.colors.map(hexToRgb);
    const targetColors = newColors.map(hexToRgb);
    
    let step = 0;
    const animateTransition = () => {
      const interpolatedColors = currentColors.map((startColor, index) =>
        startColor.map((startChannel, channelIndex) =>
          Math.round(startChannel + (targetColors[index][channelIndex] - startChannel) * (step / TRANSITION_STEPS))
        )
      ).map(rgbToHex);
      
      setGradientOptions((prev) => ({
        ...prev,
        colors: interpolatedColors,
      }));
      
      step++;
      if (step <= TRANSITION_STEPS) {
        timeout = setTimeout(animateTransition, INTERVAL);
      }
    };
    
    clearTimeout(timeout);
    animateTransition();
  };

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

      <View style={styles.buttonContainer}>
        <Button title="Dawn" onPress={() => transitionGradient(GRADIENTS.Dawn)} />
        <Button title="Sunrise" onPress={() => transitionGradient(GRADIENTS.Sunrise)} />
        <Button title="Morning" onPress={() => transitionGradient(GRADIENTS.Morning)} />
        <Button title="Afternoon" onPress={() => transitionGradient(GRADIENTS.Afternoon)} />
        <Button title="Dusk" onPress={() => transitionGradient(GRADIENTS.Dusk)} />
        <Button title="Sunset" onPress={() => transitionGradient(GRADIENTS.Sunset)} />
        <Button title="Night" onPress={() => transitionGradient(GRADIENTS.Night)} />
        <Button title="Midnight" onPress={() => transitionGradient(GRADIENTS.Midnight)} />
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
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
});
