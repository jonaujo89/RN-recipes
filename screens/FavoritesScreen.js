import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoritesScreen = () => {

    return (
        <View style={styles.screen}>
            <Text>FavoritesScreen</Text>
        </View>
    );
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;