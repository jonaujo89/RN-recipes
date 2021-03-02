import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';

import { CATEGORIES } from '../data/dummy-data';

const CtegoryMealsScreen = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    if (displayedMeals.length === 0) {
        return <View styles={styles.content}>
            <DefaultText>No meals, maybe check your filters?</DefaultText>
        </View>
    }

    return (
        <MealList
            listData={displayedMeals}
            navigation={navigation}
        />
    );
};

CtegoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(category => category.id === catId);
    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CtegoryMealsScreen;