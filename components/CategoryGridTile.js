import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback
} from 'react-native';

const CategoryGridTile = ({ title, color, onSelect }) => {
    let ToucnableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ToucnableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <ToucnableComponent
            style={{ flex: 1 }}
                onPress={onSelect}
            >
                <View style={{
                    ...styles.container,
                    ...{ backgroundColor: color }
                }}>
                    <Text
                        style={styles.title}
                        numberOfLines={2}
                    >{title}</Text>
                </View>
            </ToucnableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 25,
        elevation: 5,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible'
    },
    container: {
        flex: 1,
        borderRadius: 25,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 25,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'right'
    }
});

export default CategoryGridTile;