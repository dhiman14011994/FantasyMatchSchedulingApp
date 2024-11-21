import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RouteNames } from '../utils/routesName';
import Home from '../screens/Home';
import AddEditMatch from '../screens/AddEditMatch';

const Stack = createNativeStackNavigator();
const Routes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={RouteNames.HOME}>
          <Stack.Screen name={RouteNames.HOME} component={Home} />
          <Stack.Screen name={RouteNames.ADD_EDIT_MATCH}component={AddEditMatch} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
