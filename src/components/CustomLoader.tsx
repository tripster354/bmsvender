import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

interface ICustomLoader {
    isLoading: boolean
}

const CustomLoader : FC<ICustomLoader> = (props) => {
  return (
    <>
    {
        props.isLoading?
        <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="black" />
    </View>
    :
    null
    }
    </>
  )
}

export default CustomLoader

const styles = StyleSheet.create({
    loaderContainer:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor:'rgba(255,255,255,0.9)',
    justifyContent:"center",
    alignItems:"center"
    }
})