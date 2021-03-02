import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { toggleFavorite } from '../store/actions/meals';

import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';



const ListItem = ({ children }) => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{children}</DefaultText>
        </View>
    );
};

const MealDetailScreen = ({ navigation }) => {
    const availableMeals = useSelector(state => state.meals.meals);
    const currentMealIsFavorite = useSelector(state => 
        state.meals.favoriteMeals.some(meal => meal.id === mealId)
    );
    const mealId = navigation.getParam('mealId');

    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback((mealId) => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        //not optimal, header didn't show up right away
        // navigation.setParams({ mealTitle: selectedMeal.title });
        navigation.setParams({ toggleFav: toggleFavoriteHandler });
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        navigation.setParams({ isFav: currentMealIsFavorite });
    }, [currentMealIsFavorite]);


    return (
        <ScrollView>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>Ingridients</Text>
            {selectedMeal.ingridients.map(ingridient =>
                <ListItem key={ingridient}>{ingridient}</ListItem>
            )}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step =>
                <ListItem key={step}>{step}</ListItem>
            )}
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const isFavorite = navigationData.navigation.getParam('isFav');
    // const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: mealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Favorite'
                iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
                onPress={toggleFavorite}
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;