import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MealDetailScreen = ({ navigation }) => {

    return (
        <View style={styles.screen}>
            <Text>MealDetailScreen</Text>
            <Button
                title='Go back to Categories'
                onPress={() => {
                    navigation.popToTop();
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

export default MealDetailScreen;