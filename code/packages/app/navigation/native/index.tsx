import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoardScreen from '../../../../apps/next/pages/onboard'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from 'app/features/search';
import LocationScreen from 'app/features/location';
import Category from '../../features/category';
import ProductScreen from 'app/features/product';
import BagScreen from '../../../../apps/next/pages/bag';

const Tab = createBottomTabNavigator();


function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bag" component={BagScreen} />
    </Tab.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bag" component={BagScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator<{
  onboard: undefined
  home: undefined
  search: undefined
  location: undefined
  products: {
    id: string
  }
  category: {
    id: string
  }
  bag: undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="search"
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
        component={MyTabs}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="search"
        component={SearchScreen}
        options={{
          title: 'Search',
        }}
      />
      <Stack.Screen
        name="location"
        component={LocationScreen}
        options={{
          title: 'Location',
        }}
      />
      <Stack.Screen
        name="category"
        component={Category}
        options={{
          title: 'Category',
        }}
      />
      <Stack.Screen
        name="products"
        component={ProductScreen}
        options={{
          title: 'Products',
        }}
      />
    </Stack.Navigator>
  )
}
