import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.teal600,
        width: 250,
        height: 40,
        justifyContent: 'center',
        shadowColor: colors.platinum,
        shadowOffset:{
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 4,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
