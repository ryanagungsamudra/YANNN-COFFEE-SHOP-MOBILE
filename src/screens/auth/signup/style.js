import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000000',
        opacity: 0.8,
    },
    title: {
        color: 'white',
        fontSize: 65,
        lineHeight: 70,
        fontWeight: '700',
        textAlign: 'center',
        position: 'absolute',
        top: 50,
        left: 22,
    },
    signupForm: {
        width: '90%',
        position: "absolute",
        top: 150,
        left: 20,
    },
    login: {
        position: 'absolute',
        bottom: 130,
        left: 20,
        width: 352,
        height: 70,
        paddingLeft: 120,
        paddingTop: 23,
        fontSize: 17,
        fontWeight: "700",
        backgroundColor: '#6A4029',
        borderColor: '#6A4029',
        color: '#fff',
        opacity: 0.9
    },
    google: {
        position: 'absolute',
        bottom: 23,
        left: 85,
        zIndex: 2
    },
    loginGoogle: {
        width: 352,
        height: 70,
        paddingLeft: 125,
        paddingTop: 23,
        fontSize: 17,
        fontWeight: "500",
        backgroundColor: '#fff',
        borderColor: '#fff',
        color: '#000000',
        opacity: 0.9
    },
});

export default styles