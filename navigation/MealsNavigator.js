import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';


const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                    name='ios-restaurant'
                    size={25}
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: Colors.primary
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                    name='ios-star'
                    size={25}
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: Colors.secondary
        }
    }
};

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
        tabScreenConfig,
        {
            activeColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primary
            }
        }
    )
    : createBottomTabNavigator(
        tabScreenConfig,
        {
            tabBarOptions: {
                activeTintColor: Colors.secondary
            }
        }
);

export default createAppContainer(MealsFavTabNavigator);



// import { createDrawerNavigator } from 'react-navigation-drawer';