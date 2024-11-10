import { Stack } from 'expo-router';
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';


SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
 const [loaded, error] = useFonts({
    /// FONTS /// - https://imgur.com/a/8Gs6BSY
    // Builder Sans
    'BSThin': require('@/assets/fonts/BuilderSansThin.otf'),
    'BSLight': require('@/assets/fonts/BuilderSansLight.otf'),
    'BSRegular': require('@/assets/fonts/BuilderSansRegular.otf'),
    'BSMedium': require('@/assets/fonts/BuilderSansMedium.otf'),
    'BSSemibold': require('@/assets/fonts/BuilderSansSemiBold.otf'),
    'BSBold': require('@/assets/fonts/BuilderSansBold.otf'),
    'BSExtraBold': require('@/assets/fonts/BuilderSansExtraBold.otf'),

    // Builder Extended
    'BELight': require('@/assets/fonts/BuilderExtendedLight.otf'),
    'BERegular': require('@/assets/fonts/BuilderExtendedRegular.otf'),
    'BESemibold': require('@/assets/fonts/BuilderExtendedSemiBold.otf'),
    'BEBold': require('@/assets/fonts/BuilderExtendedBold.otf'),
    'BEExtraBold': require('@/assets/fonts/BuilderExtendedExtraBold.otf'),

    // Builder Mono
    'BMLight': require('@/assets/fonts/BuilderMonoLight.otf'),
    'BMRegular': require('@/assets/fonts/BuilderMonoRegular.otf'),
    'BMBold': require('@/assets/fonts/BuilderMonoBold.otf'),



    // Fallbacks
    'Sans': require('@/assets/fonts/SourceSans.ttf'),
    'Extended': require('@/assets/fonts/Montserrat.ttf'),
    'Mono': require('@/assets/fonts/RobotoMono.ttf'),
 });

 useEffect(() => {
   if (loaded || error) {
     SplashScreen.hideAsync();
   }
 }, [loaded, error]);

 if (!loaded && !error) {
   return null;
 }

 return (
  <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="+not-found" />
  </Stack>
);
}
