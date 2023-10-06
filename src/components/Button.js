import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
const Button = ({props}) => {
const {type,bgcolor,icon,label,height,width} = props

  return (
   <Button icon={{icon}} mode={{type}}>
    {{label}}
   </Button>
  )
}

export default Button

const styles = StyleSheet.create({})