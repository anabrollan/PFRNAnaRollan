import {useFonts} from 'expo-font'
import Navigator from './src/navigation/Navigator';
import { colors } from './src/global/color'
import { StyleSheet } from 'react-native';



export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Lato: require("./assets/Lato-Regular.ttf"),
  })

  if(!fontsLoaded || fontError) {
    return null
  }

  if(fontsLoaded && !fontError) {

  return (
    <Navigator />
  )
}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light,
  }
  });