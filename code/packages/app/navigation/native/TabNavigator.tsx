import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Bag } from "app/features"

const Tab = createBottomTabNavigator();
const Tabnavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Bag" component={Bag} />
        </Tab.Navigator>
    );
}
export default Tabnavigator