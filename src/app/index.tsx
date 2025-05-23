import { router } from 'expo-router'
import { View, StyleSheet, TouchableOpacity, Text} from "react-native"

export default function Index(){
  function signUp() {
    router.navigate('/sign-up')
  }

  function signIn() {
    router.navigate('/(drawer)')
  }

  return(
    <View style={styles.constainer}>
      <TouchableOpacity style={styles.button} onPress={signIn}>
         <Text style={styles.label}>Entrar</Text>
       </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.label}>Criar Conta</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  constainer: { 
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
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
})