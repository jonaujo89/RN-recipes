import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {

    const rendeGridItem = (itemData) => {
        return (
            <View style={styles.gridItem}>
                <Text>{itemData.item.title}</Text>
            </View>
        );
    };

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={rendeGridItem}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;