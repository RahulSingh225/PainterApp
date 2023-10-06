import { View, Text } from 'react-native'
import React from 'react'
import I18n from '../../../utils/i18n'
const Login = () => {
  return (
    <View>
      <Text>{I18n.t('auth.login.login_heading')}</Text>
    </View>
  )
}

export default Login