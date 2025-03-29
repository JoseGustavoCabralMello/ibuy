import { View, Text, StyleSheet} from "react-native"

export default function Index(){
  return(
    <View style={styles.constainer}>
      <Text style={styles.title}>Entrar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: {fontSize: 22, fontWeight: "bold" }
})