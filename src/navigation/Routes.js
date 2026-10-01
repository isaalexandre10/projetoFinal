import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExemploDashboardScreen from '../screen/ExemploDashboardScreen';
import ExemploFormScreen from '../screen/ExemploFormScreen';
import ExemploListScreen from '../screen/ExemploListScreen';
import ExemploLoginScreen from '../screen/ExemploLoginScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    // Envolve toda a navegação do aplicativo.
    <NavigationContainer>
      {/* Cria a pilha de telas. */}
      <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={ExemploLoginScreen}
            title="Login"
        />
        <Stack.Screen
          name="Dashboard"
          component={ExemploDashboardScreen}
          title="Dashboard"
        />
        <Stack.Screen
            name="Form"
            component={ExemploFormScreen}
            title="Cadastro"
        />
        <Stack.Screen
            name="List"
            component={ExemploListScreen}
            title="Lista"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}