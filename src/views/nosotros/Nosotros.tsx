import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { classes } from './Nosotros'

const Nosotros = (props: any) => {
  const { navigation, route } = props
  const { clienteId } = route.params

  const volver = () => {
    // navigation.navigate('Inicio')
    navigation.goBack()
  }

  return (
    <View style={classes.contenedor}>
      <Text>Nosotros</Text>
      <Text>{clienteId}</Text>
      <Button
        title='Volver'
        onPress={() => volver()}
      />
    </View>
  )
}

export default Nosotros
