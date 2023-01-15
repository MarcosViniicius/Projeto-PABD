import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome';
import SignIn from '../pages/Signin';
import ControlPanel from '../pages/ControlPanel';
import Registration from '../pages/Registration';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ControlPanel"
                component={ControlPanel}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Registration"
                component={Registration}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}