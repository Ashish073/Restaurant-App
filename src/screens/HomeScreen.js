import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import useResult from '../hooks/useResult';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const HomeScreen = ({ navigation }) => {

    const [searchValue, setSearchValue] = useState('pizza');
    const [searchAPIData, result, error] = useResult();

    const handleSearch = (text) => {
        setSearchValue(text);
    }


    const filterByPrice = (price) => {
        return result.filter(res => {
            return res.price === price
        })
    }


    return (
        <>

            <View style={styles.container}>
                <SearchBar searchAPIData={searchAPIData} searchValue={searchValue} handleSearch={(text) => handleSearch(text)} />
                <Text style={{ textAlign: "center", marginHorizontal: 10 }}>We have {result.length} results</Text>
                {
                    error != "" ? <Text style={{ color: "#ff8000" }}>{error}</Text> : null
                }

                <ScrollView style={{ height: "100%" }}>
                    <ResultList result={filterByPrice('$')} navigation={navigation} title="Pocket friendly" />
                    <ResultList result={filterByPrice('$$')} navigation={navigation} title="Lifestyle" />
                    <ResultList result={filterByPrice('$$$')} navigation={navigation} title="Exotic" />
                </ScrollView>


                {/* <ResultList result={result} title="Pocket Friendly" />
                <ResultList result={result} title="Cost Effective" />
                <ResultList result={result} title="Exotic" /> */}


            </View>

        </>
    );
}



HomeScreen.navigationOptions = ({ navigation }) => {

    const signout = () => {
        firebase.auth().signOut();
        navigation.navigate('Index');
    }

    return {
        title: "Restaurant finder",
        headerTintColor: "#FFFFFF",
        headerStyle: {
            backgroundColor: "#008710"
        },
        headerLeft: () => { null },
        headerRight: () =>
            <TouchableOpacity onPress={() => signout()} style={styles.logoutBtn}>
                <MaterialCommunityIcons name="logout-variant" size={24} color="white" />
            </TouchableOpacity>


    }
}


const styles = StyleSheet.create({
    logoutBtn: {
        marginHorizontal: 10
    },
    textStyle: {
        color: "blue",
        fontSize: 18
    },
    textStyle1: {
        color: "red",
        fontSize: 18
    },
    inputStyle: {
        backgroundColor: "white",
        marginHorizontal: 20
    },
    container: {
        marginHorizontal: 10,
        height: "100%"
    }
});

export default HomeScreen;