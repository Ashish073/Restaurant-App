import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const SignupScreen = ({ navigation }) => {


    const [signName, setSignName] = useState('');
    const [signEmail, setSignEmail] = useState('');
    const [inputError, setInputError] = useState('');

    const [signPass, setSignPass] = useState('');
    const [error, setError] = useState('');


    const handleName = (text) => {
        if (text.length > 50) {
            setInputError("Invalid!")
        } else {
            setSignName(text);
            setInputError('');
        }
    }

    const handleEmail = (text) => {
        if (text === "") {
            setInputError('Invalid');
        }
        else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(text)) {
            setSignEmail(text);
            setInputError('');
        }
        else {
            setInputError('Invalid');
        }
    }

    const handlePass = (text) => {
        setSignPass(text);
    }

    const handleConfirmPass = (text) => {
        if (signPass === text) {
            setSignPass(text);
            setInputError('');
        }
        else {
            setInputError("Password does not match!")
        }
    }

    const signUpBtn = () => {
        setError('');

        firebase.auth().signInWithEmailAndPassword(signEmail, signPass)
            .then(() => {
                navigation.navigate('Home');
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(signEmail, signPass)
                    .catch(() => {
                        setError("Something went wrong!")
                    });
            });

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Restaurant Finder</Text>
            <Text style={styles.caption}>The best restaurants provider for your everyday cravings. </Text>
            <View style={styles.inputContainer}>
                <MaterialIcons style={{ marginTop: 6, marginLeft: 5 }} name="account-box" size={24} color="black" />
                <TextInput style={styles.inputText} onChangeText={(text) => handleName(text)} placeholder="Full name" autoCorrect={false}></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <MaterialIcons style={{ marginTop: 6, marginLeft: 5 }} name="email" size={24} color="black" />
                <TextInput style={styles.inputText} onChangeText={(text) => handleEmail(text)} autoCapitalize="none" placeholder="Email" autoCorrect={false}></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Entypo style={{ marginTop: 6, marginLeft: 5 }} name="key" size={24} color="black" />

                <TextInput style={styles.inputText} secureTextEntry={true} onChangeText={(text) => handlePass(text)} autoCapitalize="none" placeholder="Password" autoCorrect={false}></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <MaterialIcons style={{ marginTop: 6, marginLeft: 5 }} name="confirmation-num" size={24} color="black" />
                <TextInput style={styles.inputText} secureTextEntry={true} onChangeText={(text) => handleConfirmPass(text)} autoCapitalize="none" placeholder="Confirm Password" autoCorrect={false}></TextInput>
            </View>
            <TouchableOpacity style={styles.signupBtn} onPress={() => signUpBtn()}>
                <Text style={styles.btnText1} >Sign up</Text>
            </TouchableOpacity>
            <Text style={styles.errorMessage}>{inputError}</Text>
            <Text style={styles.errorMessage}>{error}</Text>
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: true,
        title: "Sign up",
        headerTintColor: "#FFFFFF",
        headerStyle: {
            backgroundColor: "#008710"
        },
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
    inputText: {
        backgroundColor: "#FFFFFF",
        height: 30,
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 10,
        paddingHorizontal: 5,
        borderRadius: 10
    },
    pageName: {
        fontSize: 20,
        textAlign: "center"
    },
    signupBtn: {
        marginVertical: 10,
        backgroundColor: "#008710",
        paddingVertical: 10,
        borderRadius: 10
    },
    btnText1: {
        textAlign: "center",
        color: "#FFFFFF"
    },
    errorMessage: {
        color: "red",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
    }
});

export default SignupScreen;