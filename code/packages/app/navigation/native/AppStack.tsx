import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Category, Location, Product, Search } from "app/features"
import Tabnavigator from "./TabNavigator"

const App = createNativeStackNavigator<{
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


export function AppStack() {
    return (
        <App.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <App.Screen
                name="home"
                component={Tabnavigator}
                options={{
                    title: 'Home',
                }}
            />
            <App.Screen
                name="search"
                component={Search}
                options={{
                    title: 'Search',
                }}
            />
            <App.Screen
                name="location"
                component={Location}
                options={{
                    title: 'Location',
                }}
            />
            <App.Screen
                name="category"
                component={Category}
                options={{
                    title: 'Category',
                }}
            />
            <App.Screen
                name="products"
                component={Product}
                options={{
                    title: 'Products',
                }}
            />
        </App.Navigator>
    )
}
