import React from 'react'
import {Text} from 'react-native';

const ProfileScreen = ({ navigation, route }) => {
    return( 
    <Text>El perfil del usuario es : {route.params.name}</Text>
    )
  }





export default ProfileScreen