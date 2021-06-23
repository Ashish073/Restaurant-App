import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import DetailsCard from '../components/DetailsCard';
import yelp from '../api/yelp';

const DetailsScreen = ({ navigation }) => {


    const [detail, setDetail] = useState(null);
    const [err, setErr] = useState('');
    const id = navigation.getParam('id');

    useEffect(() => {
        getDetails(id);
    }, [])


    const getDetails = async (d_id) => {
        try {
            const response = await yelp.get(`/${d_id}`);
            setDetail(response.data);
            setErr('');
        } catch (error) {
            setErr(error);
        }

    };

    if (!detail) {
        return null;
    }

    return (
        <View style={styles.container}>
            <DetailsCard detail={detail} />
        </View>
    )
}

DetailsScreen.navigationOptions = () => {
    return {
        headerTintColor: "#FFFFFF",
        headerStyle: {
            backgroundColor: "#008710"
        },
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    }
});

export default DetailsScreen;