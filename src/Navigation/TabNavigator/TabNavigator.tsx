import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TabConfig from '../screen/tab.config';
import Constants from '../../Constants/Constants';

const Tab = createMaterialTopTabNavigator();

function TabScreen() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontWeight: '600',
                    fontSize: 15,
                    color: Constants.Colors.WHITE,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: Constants.Colors.WHITE, // Ubah warna indikator menjadi putih
                },

                tabBarStyle: {
                    backgroundColor: Constants.Colors.GREEN,
                },
            }}
        >
            {TabConfig.map(({ name, component, options }) => (
                <Tab.Screen
                    key={name}
                    component={component}
                    name={name}
                    options={options}
                />
            ))}
        </Tab.Navigator>
    );
}

export default TabScreen;
