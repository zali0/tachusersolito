import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'onboard',
            screens: {
              onboard: 'onboard',
              home: '',
              search: 'search',
              location: 'location',
              category: 'category/:id',
              products: 'products/:id',
              bag: 'bag',
              'user-detail': 'user/:id',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
