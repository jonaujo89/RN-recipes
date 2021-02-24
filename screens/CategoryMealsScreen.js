import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CtegoryMealsScreen = ({ navigation }) => {

    return (
        <View style={styles.screen}>
            <Text>CtegoryMealsScreen</Text>
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CtegoryMealsScreen;