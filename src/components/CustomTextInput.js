import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import COLORS from '../assets/colors'

const style = StyleSheet.create({
    title: {
        marginTop: 20
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 10,
        height: 50,
        borderColor: COLORS.gray
    },
})

const CustomTextInput = ({ title, placeHolder, secureTextEntry, onTextChange, value }) => {
    return (
        <View>
            <Text style={style.title}>{title}</Text>
            <TextInput
                style={style.input}
                placeholder={placeHolder}
                secureTextEntry={secureTextEntry}
                onChangeText={onTextChange}
                value={value}
            />
        </View>
    )
}

export default CustomTextInput
