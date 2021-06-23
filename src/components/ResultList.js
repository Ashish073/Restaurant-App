import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultsCard from '../components/ResultsCard';
import { withNavigation } from 'react-navigation';


const ResultList = ({ title, result, navigation }) => {

    const data = result;

    if (!data.length) {
        return null;
    }

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true} keyExtractor={(result) => result.id} data={result} renderItem={({ item }) => {
                return (
                    <>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
                            < ResultsCard navigation={navigation} item={item} />
                        </TouchableOpacity>
                    </>
                )
            }} />

        </View>
    );
}

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginHorizontal: 10

    }
});



export default withNavigation(ResultList);