import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CtegoryMealsScreen = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(category => category.id === catId);

    return (
        <View style={styles.screen}>
            <Text>CtegoryMealsScreen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button
                title='Go to MealDetail!'
                onPress={() => {
                    navigation.navigate('MealDetail');
                }}
            />
            <Button
                title='Go back'
                onPress={() => {
                    navigation.pop();
                }}
            />
        </View>
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CtegoryMealsScreen;