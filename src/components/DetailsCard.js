import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default ({ detail }) => {


    return (
        <>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true} keyExtractor={(photo) => photo}
                data={detail.photos}
                renderItem={({ item }) => {
                    return <Image style={{ marginHorizontal: 5, height: 200, width: 200 }} source={{ uri: item }} />
                }}
            />

            <Text style={styles.title}>{detail.name}</Text>
            <View style={{ flexDirection: "row" }}>
                <AntDesign style={{ marginTop: 5 }} name="star" size={16} color="#d1b800" />
                <Text style={styles.desc}> Rating : {detail.rating}</Text>

            </View>
            <View style={{ flexDirection: "row" }}>
                <Feather style={{ marginTop: 7 }} name="phone-call" size={16} color="black" />
                <Text style={styles.desc}> Call : {detail.phone}</Text>

            </View>
            <View style={{ flexDirection: "row" }}>
                <MaterialIcons style={{ marginTop: 7 }} name="feedback" size={16} color="#00ba2b" />

                <Text style={styles.desc}> Review : {detail.review_count}</Text>

            </View>

        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 5
    },
    desc: {
        fontSize: 14,
        marginVertical: 5,
        color: "#ababab"
    },
});