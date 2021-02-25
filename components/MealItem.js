import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    ImageBackground
} from 'react-native';

import DefaultText from './DefaultText';

const MealItem = ({ title, duration, complexity, affordability, imageUrl, onSelectMeal }) => {
    let ToucnableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ToucnableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.mealItem}>
            <ToucnableComponent
                style={{ flex: 1 }}
                onPress={onSelectMeal}
            >
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                            source={{ uri: imageUrl }}
                            style={styles.bgImage}
                        >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <DefaultText>{duration}m</DefaultText>
                        <DefaultText>{complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </ToucnableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
        overflow: 'hidden',
        marginVertical: 10
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    }
});

export default MealItem;