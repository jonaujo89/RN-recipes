import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';

import { MEALS } from '../data/dummy-data';

const MealDetailScreen = ({ navigation }) => {
    const mealId = navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Favorite'
                iconName='ios-star'
                onPress={() => {
                    console.log('mark')
                }}
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;