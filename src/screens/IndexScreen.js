import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loggedIn, setLoggedIn] = useState(null);
    const [authError, setAuthError] = useState('');
    const [pass, setPass] = useState('');
    const [passError, setPassError] = useState('');

    const handleEmail = (text) => {
        if (text === "") {
            setEmailError('Invalid');
            setEmail('');
        }
        else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(text)) {
            setEmail(text);
            setEmailError('');
        }
        else {
            setEmailError('Invalid');
            setEmail('');
        }
    }

    const handlePass = (text) => {
        if (text === "") {
            setPassError("Password field empty!")
        }
        else {
            setPass(text);
        }
    }


    const loginBtnClick = () => {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(() => {
                setEmail('');
                setPass('');
                setAuthError('');
                setEmailError('');
            })
            .catch(() => {
                setAuthError("Email/Password does not exist!");
            });
    }


    useEffect(() => {
        firebase.initializeApp({
            apiKey: 'AIzaSyCYDPuIqJJXtK-fB7HLTa4DbdJVnj5Gmos',
            authDomain: 'restaurant-finder-9629b.firebaseapp.com',
            projectId: 'restaurant-finder-9629b',
            storageBucket: 'restaurant-finder-9629b.appspot.com',
            messagingSenderId: '111645066809',
            appId: '1:111645066809:web:4be8d0716803cae36cafe8',
            measurementId: 'G-LZC62GW7D4'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setLoggedIn("true");
                navigation.navigate('Home');
            }
            else {
                setLoggedIn("false");
            }
        })
    }, [])



    return (

        <View style={styles.container}>
            <Text style={styles.title}>Restaurant Finder</Text>
            <Text style={styles.caption}>The best restaurants provider for your everyday cravings. </Text>
            <View style={styles.inputContainer}>
                <MaterialIcons style={{ marginTop: 6, marginLeft: 5 }} name="account-box" size={24} color="black" />
                <TextInput style={styles.inputText} onChangeText={(text) => handleEmail(text)} autoCapitalize="none" placeholder="Email" autoCorrect={false}></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Entypo style={{ marginTop: 6, marginLeft: 5 }} name="key" size={24} color="black" />
                <TextInput style={styles.inputText} secureTextEntry={true} onChangeText={(text) => handlePass(text)} autoCapitalize="none" placeholder="Password" autoCorrect={false}></TextInput>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => loginBtnClick()}>
                <Text style={styles.btnText1} >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.btnText2} >Dont have an account resgister now?</Text>
            </TouchableOpacity>
            <Text style={styles.errorMessage}>{passError}</Text>
            <Text style={styles.errorMessage}>{emailError}</Text>
            <Text style={styles.errorMessage}>{authError}</Text>

        </View>
    )
}

IndexScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "column",
    },
    inputContainer: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        marginVertical: 5,
        height: 40,
        borderRadius: 10
    },
    title: {
        color: "#008710",
        fontSize: 48,
        textAlign: "center",
        marginTop: 50
    },
    caption: {
        fontSize: 12,
        textAlign: "center",
        marginBottom: 50
    },
    loginBtn: {
        backgroundColor: "#008710",
        paddingVertical: 5,
        marginTop: 5,
        borderRadius: 10

    },
    signupBtn: {
        marginVertical: 10
    },
    inputText: {
        height: 30,
        flex: 1,
        marginVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "#FFFFFF",
    },
    btnText1: {
        textAlign: "center",
        color: "white"
    },
    btnText2: {
        textAlign: "center",
    },
    errorMessage: {
        color: "red",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
    },

})

export default withNavigation(IndexScreen);