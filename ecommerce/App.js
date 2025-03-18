import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
      <View>      
        <View>
          <TextInput />
        <Button
          title="Agregar"
        />
      </View>
      <Text>Texto de prueba</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    width: 200,
  },
});
