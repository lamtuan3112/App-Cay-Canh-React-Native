import React from "react";
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {Home,Favourites,tree,Search,info,timkiem } from "../screens/";
import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: "10%",
    },
};

const CameraButton = () => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: COLORS.primary,
            }}
        >
            <Image
                source={require('../assets/icons/camera.png')}
                resizeMode="contain"
                style={{
                    width: 23,
                    height: 23
                }}
            />
        </View>
    );
};

const Tabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={require('../assets/icons/home.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "Box":
                            return (
                                <Image
                                    source={require('../assets/icons/seed.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "timkiem":
                            return (
                                <Image
                                    source={require('../assets/icons/search_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "Search":
                            return (
                                <Image
                                    source={require('../assets/icons/den.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 35,
                                        height: 35
                                    }}
                                />
                            );
                        case "Favourite":
                            return (
                                <Image
                                    source={require('../assets/icons/heart_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Box"
                component={tree}
            />
            <Tab.Screen
                name="timkiem"
                component={timkiem}
            />
            <Tab.Screen
                name="Search"
                component={Search}
            />
            <Tab.Screen
                name="Favourite"
                component={Favourites}
            />
            {/* <Tab.Screen
                name="info"
                component={info}
            /> */}
        </Tab.Navigator>
    );
};

export default Tabs;
