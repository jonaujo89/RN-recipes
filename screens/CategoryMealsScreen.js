import React from 'react';

import MealList from '../components/MealList';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CtegoryMealsScreen = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    

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

export default CtegoryMealsScreen;