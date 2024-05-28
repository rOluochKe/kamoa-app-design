import { Image } from 'react-native'
import React from 'react'

const Logo: React.FC = () => {
  return (
    <Image
      source={require("../assets/word-logo.png")}
      style={{
        height: 40,
        width: 119,
        resizeMode: "center",
      }}
    />
  )
}

export default Logo
