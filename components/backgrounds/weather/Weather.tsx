import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';

// Import cloud images
const cloudImages = [
  require('@/assets/images/backgrounds/sky/clouds/1.png'),
  require('@/assets/images/backgrounds/sky/clouds/2.png'),
  require('@/assets/images/backgrounds/sky/clouds/3.png'),
  require('@/assets/images/backgrounds/sky/clouds/4.png'),
  require('@/assets/images/backgrounds/sky/clouds/5.png'),
  require('@/assets/images/backgrounds/sky/clouds/6.png'),
  require('@/assets/images/backgrounds/sky/clouds/7.png'),
  require('@/assets/images/backgrounds/sky/clouds/8.png'),
  require('@/assets/images/backgrounds/sky/clouds/9.png'),
  require('@/assets/images/backgrounds/sky/clouds/10.png'),
];

const { width, height } = Dimensions.get('window');

// Global configuration constants
const CLOUD_SCALE = 2.5; // Base scaling factor for all clouds
const MIN_SPEED = 100000; // Minimum duration for a cloud crossing (closer clouds)
const MAX_SPEED = 300000; // Maximum duration for a cloud crossing (farther clouds)
const SPAWN_RATE = 1000; // Spawn interval in milliseconds
const MIN_OPACITY = 0.1; // Minimum cloud transparency
const MAX_OPACITY = 0.7; // Maximum cloud transparency
const TINT_COLORS = [null, '#ffffff', '#ddddff', '#ffeeee']; // Optional tints for clouds

const Weather = () => {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const cloud = {
        id: Math.random().toString(), // Unique ID
        image: cloudImages[Math.floor(Math.random() * cloudImages.length)], // Random image
        height: Math.random() * (height * 0.5), // Random spawn height (top sector of the screen)
        scale: Math.random() * 0.7 + 0.5, // Scale (0.5 to 1.2)
        opacity: Math.random() * (MAX_OPACITY - MIN_OPACITY) + MIN_OPACITY, // Random transparency
        tintColor: TINT_COLORS[Math.floor(Math.random() * TINT_COLORS.length)], // Random optional tint
      };

      // Calculate speed based on scale (smaller = further = slower)
      const speed = MAX_SPEED - cloud.scale * (MAX_SPEED - MIN_SPEED);

      setClouds((prevClouds) => [
        ...prevClouds,
        { ...cloud, speed },
      ]);
    }, SPAWN_RATE); // Use SPAWN_RATE for spawn frequency

    return () => clearInterval(interval);
  }, []);

  const removeCloud = (id) => {
    setClouds((prevClouds) => prevClouds.filter((cloud) => cloud.id !== id));
  };

  return (
    <View style={styles.container}>
      {clouds.map((cloud) => (
        <Cloud
          key={cloud.id}
          cloud={cloud}
          onEnd={() => removeCloud(cloud.id)}
        />
      ))}
    </View>
  );
};

const Cloud = ({ cloud, onEnd }) => {
  const translateX = useRef(new Animated.Value(-width)).current; // Start off-screen left

  useEffect(() => {
    // Calculate the scaled width of the cloud
    const cloudWidth = 100 * cloud.scale * CLOUD_SCALE;

    // Animate the cloud to move completely across the screen, taking its scaled width into account
    Animated.timing(translateX, {
      toValue: width + cloudWidth, // Move off-screen right, considering the cloud's scaled width
      duration: cloud.speed, // Duration based on parallax depth
      useNativeDriver: true,
    }).start(onEnd); // Remove cloud when animation completes
  }, []);

  return (
    <Animated.Image
      source={cloud.image}
      style={[
        styles.cloud,
        {
          top: cloud.height, // Position along height
          width: 100 * cloud.scale * CLOUD_SCALE, // Scale the width based on the scale factor
          height: 60 * cloud.scale * CLOUD_SCALE, // Scale the height based on the scale factor
          transform: [
            { translateX },
            { scale: cloud.scale * CLOUD_SCALE }, // Parallax scaling
          ],
          opacity: cloud.opacity, // Apply transparency
          tintColor: cloud.tintColor, // Apply optional tint color
        },
      ]}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Transparent overlay
    position: 'absolute', // Overlay above other content
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  cloud: {
    position: 'absolute',
    // Width and height are dynamically set based on the cloud's scale
  },
});

export default Weather;
