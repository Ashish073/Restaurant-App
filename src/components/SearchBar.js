import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({ searchValue, handleSearch, searchAPIData }) => {
    return (
        <View style={styles.container}>
            <Feather style={{ marginTop: 12 }} name="search" size={30} color="black" />

            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={() => searchAPIData(searchValue)}
                onChangeText={(text) => handleSearch(text)} placeholder="Search for restaurant" style={styles.inputStyle}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: "blue",
        fontSize: 18
    },
    inputStyle: {
        marginVertical: 10,
        padding: 10,
        flex: 1
    },
    container: {
        flexDirection: "row",
        paddingHorizontal: 10,
        marginVertical: 5,
        backgroundColor: "#e6e6e6",
        borderRadius: 10
    }

})

export default SearchBar;