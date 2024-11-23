/// IMPORTS ///
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SkyBackground from '@/components/backgrounds/weather/SkyBackground';
import Weather from '@/components/backgrounds/weather/Weather';

/// COMPONENT ///

const About = () => {
  return (
    <View style={styles.container}>
      {/* Background Layer */}
      <SkyBackground />

      {/* Weather Layer (e.g., Clouds) */}
      <Weather />

      {/* Overlay Content */}
      <View style={styles.overlay}>
        <Text style={styles.title}>about...</Text>
        <Text style={styles.text}>
          this is the best app ever. fr.
        </Text>
      </View>
    </View>
  );
};

/// STYLES ///

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10, // Ensures overlay content is above the background layers
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
});

export default About;
