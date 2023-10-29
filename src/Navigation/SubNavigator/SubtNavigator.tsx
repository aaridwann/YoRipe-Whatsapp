import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenConfigs from '../screen/screen.config';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {screenConfigs.map(({ name, component, options }) => (
                    <Stack.Screen
                        key={name}
                        name={name}
                        component={component}
                        options={options}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
