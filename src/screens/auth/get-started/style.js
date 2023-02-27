import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000000',
        opacity: 0.6,
        position: 'relative'
    },
    title: {
        color: 'white',
        fontSize: 65,
        lineHeight: 56,
        fontWeight: '700',
        textAlign: 'center',
        position: 'absolute',
        top: 140,
        left: 60
    },
    desc: {
        color: 'white',
        fontSize: 17,
        lineHeight: 25,
        fontWeight: '400',
        textAlign: 'center',
        position: 'absolute',
        top: 205,
        left: 75
    },
    signup: {
        position: 'absolute',
        bottom: 130,
        left: 20,
        width: 352,
        height: 70,
        paddingLeft: 100,
        paddingTop: 23,
        fontSize: 17,
        fontWeight: "700",
        backgroundColor: '#6A4029',
        borderColor: '#6A4029',
        color: '#fff',
        opacity: 0.85
    },
    login: {
        position: 'absolute',
        bottom: 45,
        left: 20,
        width: 352,
        height: 70,
        paddingLeft: 155,
        paddingTop: 23,
        fontSize: 17,
        fontWeight: "700",
        backgroundColor: '#FFBA33',
        borderColor: '#FFBA33',
        color: '#000',
        opacity: 0.85
    }
});

export default styles