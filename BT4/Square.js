// rnfes 

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Square = ({text,color}) => {
  return (
    <View style={{... styles.style, backgroundColor: color}}>
      <Text>{text}</Text>
    </View>
  )
}

export default Square

const styles = StyleSheet.create({
    style:{
        width:80,
        height:80,
        marginHorizontal:10,
        alignItems:'center',
        justifyContent:'center',
    }
})