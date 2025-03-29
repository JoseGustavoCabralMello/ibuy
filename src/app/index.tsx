import { View, StyleSheet} from "react-native"
import { Link } from 'expo-router'

export default function Index(){
  return(
    <View style={styles.constainer}>
      <Link href="/sign-up" style={styles.new}>
         Criar conta
       </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  new: {fontSize: 16, fontWeight: "bold" }
})