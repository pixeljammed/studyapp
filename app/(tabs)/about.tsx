import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>settings</Text>  
      <Text style={styles.text}>coming soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
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
});
