import { View, StyleSheet, TouchableOpacity, Text} from "react-native"
import { Link, router } from 'expo-router'

export default function Index(){
  function signUp() {
    router.navigate('/sign-up')
  }

  return(
    <View style={styles.constainer}>
      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.label}>Criar Conta</Text>
      </TouchableOpacity>

      <Link href="/product/12">Abrir produto</Link>

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