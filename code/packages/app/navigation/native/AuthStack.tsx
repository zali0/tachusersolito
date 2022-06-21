import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { OnBoard } from "app/features/"

const Auth = createNativeStackNavigator<{
    onboard: undefined
}>()

const AuthStack = () => {
    return (
        <Auth.Navigator
            initialRouteName="onboard"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Auth.Screen
                name="onboard"
                component={OnBoard}
                options={{
                    title: 'OnBoard',
                }}
            />
        </Auth.Navigator>
    )
}
export default AuthStack
