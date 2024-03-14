import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { classes } from './Inicio'

const Inicio = (props: any) => {
  const { navigation } = props

  console.log(props)

  const visitarNosotros = () => {
    navigation.navigate('Nosotros')
  }

  return (
    <View style={classes.contenedor}>
      <Text>Inicio</Text>
      <Button
        title='Ir a Nosotros'
        onPress={() => visitarNosotros()}
      />
    </View>
  )
}

export default Inicio
