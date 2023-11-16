import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/Singin";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Signin"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}