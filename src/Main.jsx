import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import
{
    Card,
    Title,
    Paragraph,
    PaperProvider,
} from 'react-native-paper';
import Home from './screens/Home';
import Feed  from './screens/Feed';
import { NavigationItems } from './screens/NavItems';

const Stack = createStackNavigator();

export default function Main()
{
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name={ NavigationItems.Screen1 } component={ Home } />
                    <Stack.Screen name={NavigationItems.Screen2} component={ Feed } /> 
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}