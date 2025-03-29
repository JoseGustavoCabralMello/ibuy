import { View, StyleSheet, TouchableOpacity, Text} from "react-native"
import { router } from 'expo-router'
import { DrawerToggleButton } from '@react-navigation/drawer'

export default function Index(){
  function signUp() {
    router.navigate('/sign-up')
  }

  return(
    <View style={styles.constainer}>
      <View style={styles.header}>
        <DrawerToggleButton />
      </View>

      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.label}>Criar Conta</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  constainer: { 
    flex: 1, 
    alignItems: "center",
    gap: 32,
    padding: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#FFF', 
  },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  }
})