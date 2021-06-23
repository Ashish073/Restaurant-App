import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ResultsCard = ({ item }) => {
    return (
        <>
            <View style={styles.cardContainer}>
                <Image style={styles.image} source={{ uri: item.image_url }} />
                <Text style={styles.title}>{item.name}</Text>
                <View style={{ flexDirection: "row" }}>
                    <AntDesign name="star" size={12} color="#d1b800" />
                    <Text style={styles.subText}> {item.rating}  </Text>
                    <MaterialIcons style={{ marginTop: 2 }} name="feedback" size={12} color="#00ba2b" />
                    <Text style={styles.subText}> {item.review_count} Reviews</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
        alignItems: "center",
        justifyContent: 'space-around',
        backgroundColor: "#ededed",
        marginHorizontal: 5,
        width: 200,
        height: 240

    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center"
    },
    subText: {
        fontSize: 12,
        color: "#adadad"
    }
    ,
    image: {
        height: 150,
        width: 190
    }
})

export default ResultsCard;