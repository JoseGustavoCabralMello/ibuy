import { View, StyleSheet, TouchableOpacity, Text} from "react-native"
import { Link } from 'expo-router'

export default function Index(){
  return(
    <View style={styles.constainer}>
      <Link href="/sign-up" asChild >
        <TouchableOpacity style={styles.button}>
           <Text style={styles.label}>Criar Conta</Text>
         </TouchableOpacity>
       </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  label: {fontSize: 16, fontWeight: "bold", color: '#FFF', },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 10,
  },
})