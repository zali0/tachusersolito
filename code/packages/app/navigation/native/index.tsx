import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoardScreen from '../../../../apps/next/pages/onboard'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'

const Stack = createNativeStackNavigator<{
  onboard: undefined
  home: undefined
  'user-detail': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="onboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="onboard"
        component={OnBoardScreen}
        options={{
          title: 'OnBoard',
        }}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  )
}
