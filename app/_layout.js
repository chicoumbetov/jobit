// import { useFonts } from "expo-font";
import * as Fonts from "expo-font";
import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout = () => {
  const [fontsLoaded] = Fonts.useFonts({
    // const [fontsLoaded] = Fonts.loadAsync({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMSansRegular: require("../assets/fonts/DMSansRegular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default Layout;
