import { View } from "dripsy";
import { AppStack } from "./AppStack";
import AuthStack from "./AuthStack";

const RootNavigator = () => {
    return (
        <View sx={{ flex: 1 }}>
            {true ? <AuthStack /> : <AppStack />}
        </View>
    );
}
export default RootNavigator