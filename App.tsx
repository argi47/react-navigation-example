import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { classes } from './AppClasses'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Inicio from './src/views/inicio/Inicio.tsx'
import Nosotros from './src/views/nosotros/Nosotros.tsx'

const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Inicio'
        >
          <Stack.Screen
            name='Inicio'
            component={Inicio}
          />
          <Stack.Screen
            name='Nosotros'
            component={Nosotros}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
