import {createStackNavigator} from '@react-navigation/stack';
import {DiscoverPage} from '../Screens/DiscoverPage'
const Stack = createStackNavigator();
const AppNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName="Splash"
        >
        <Stack.Screen
            name = "DiscoverPage" 
            component = {DiscoverPage}

        />
        </Stack.Navigator>
    );
};
export default AppNavigator