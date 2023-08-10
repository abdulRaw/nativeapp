import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationItems } from './NavItems';

export default function Home({ navigation })
{
    console.log(navigation)
    return (
        <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={ () => navigation.push(NavigationItems.Screen2) }
            />
        </View>
    );
}
