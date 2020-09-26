import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Block from '../../components/Block';
import { AuthContext } from '../login/context';

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00BFFF",
        height: 160,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 90
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    logoutButton: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingStart: 16,
        paddingEnd: 16,
        backgroundColor: 'orange',
        borderRadius: 4,
    },
    logoutText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: "bold",
    },
})

const AccountScreen = () => {
    const { signOut } = React.useContext(AuthContext)

    const logoutPress = () => {
        signOut()
    }
    return (
        <ScrollView alwaysBounceVertical={false}>
            <Block>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{ uri: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/64218386_2433397260014439_1004618147891773440_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=V4-fR3KyuPAAX8KoArx&_nc_ht=scontent.fhan4-1.fna&oh=1a8b4aa4b6d91fafa0cb6b5b2254cb3f&oe=5EE7867C' }} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>Hung Nguyen</Text>
                        <Text style={styles.info}>Mobile developer</Text>
                        <Text style={styles.description}>I have above 5 years of experience in native mobile apps development, now i am learning React Native </Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.logoutButton} onPress={logoutPress}>
                            <Text style={styles.logoutText}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Block>
        </ScrollView>
    )
}

export default AccountScreen
