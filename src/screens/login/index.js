import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Button, Image, ScrollView, ToastAndroid, Alert, Platform, Keyboard } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput'
import LoginButton from './LoginButton'
import DRAWABLES from '../../assets/drawables'
import COLORS from '../../assets/colors'
import { AuthContext } from './context'

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
    },
    forgotPwContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingVertical: 10,
    },
    forgotPassword: {
        fontWeight: "bold",
        color: "orange"
    },
    loginButton: {
        marginTop: 10,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: 'orange',
        borderRadius: 4,
    },
    loginText: {
        color: COLORS.white,
        textAlign: 'center',
        fontWeight: "bold",
    },
})

const LoginScreen = ({ value }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { onSignedIn } = React.useContext(AuthContext)

    const showAlert = (title, message, onPositivePress) => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: 'OK',
                    onPress: onPositivePress
                }
            ],
            { cancelable: true }
        );
    }

    const onLoginPress = () => {
        if (email.localeCompare('1') != 0) {
            showAlert("Login failed", 'Invalid email. Please try again!')
            return;
        }

        if (password.localeCompare('1') != 0) {
            showAlert("Login failed", 'Invalid password. Please try again!')
            return;
        }

        Keyboard.dismiss()
        let dummyToken = "zkjdkjfd"
        let successfullyMes = "Login successfully"
        if (Platform.OS === 'ios') {
            showAlert("", successfullyMes, () => {
                onSignedIn(dummyToken)
            })
        } else {
            ToastAndroid.show(successfullyMes, ToastAndroid.SHORT)
            onSignedIn(dummyToken)
        }
    }


    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ padding: 24 }} keyboardShouldPersistTaps='handled'>
                <Text style={[style.header, {
                    marginTop: 32,
                }]}>Sign In</Text>
                <CustomTextInput
                    title="Email ID"
                    placeHolder={"Enter your email here!"}
                    onTextChange={(text) => setEmail(text)}
                />
                <CustomTextInput
                    title="Password"
                    placeHolder={"Enter your password here!"}
                    onTextChange={(text) => setPassword(text)}
                    secureTextEntry
                />
                <View style={style.forgotPwContainer}>
                    <TouchableOpacity >
                        <Text style={style.forgotPassword}>For got password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={style.loginButton} onPress={onLoginPress}>
                    <Text style={style.loginText}>Sign In</Text>
                </TouchableOpacity>

                <Text style={{ fontWeight: "bold", textAlign: "center", marginVertical: 20 }}>Or sign in with</Text>
                <View style={{ flexDirection: "row" }}>
                    <LoginButton
                        title="Google"
                        icon={DRAWABLES.ic_google}
                    />
                    <View style={{ width: 10 }} />
                    <LoginButton
                        title="Facebook"
                        icon={DRAWABLES.ic_facebook}
                        color={'#4a6ea8'}
                        textColor={COLORS.white}
                    />
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20, marginBottom: 40 }}>
                    <Text>Not yet a member?</Text>
                    <TouchableOpacity style={{ marginStart: 4 }}>
                        <Text style={{ color: "orange", fontWeight: "bold" }} >Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen
