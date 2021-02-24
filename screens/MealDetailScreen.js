import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealDetailScreen = ({ navigation }) => {
    const mealId = navigation.getParams('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
};
MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParams('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title
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