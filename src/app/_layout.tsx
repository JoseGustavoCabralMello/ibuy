import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        drawerActiveTintColor: "#000000",
        drawerInactiveTintColor: "#999999",
        headerShown: false,
      }}>
       <Drawer.Screen 
        name='index' 
        options={{
          title: "Entrar",
          drawerLabel: "Entrar",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name='home' size={size} color={color} />
          ),
        }}
        />

        <Drawer.Screen 
          name="sign-up"
          options={{
            title: "Criar Conta",
            drawerLabel: "Criar Conta",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name='add' size={size} color={color} />
            ),
          }}
          />
      </Drawer>
     </GestureHandlerRootView>
  )
}