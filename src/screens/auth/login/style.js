import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: '#000000',
        opacity: 0.90,
    },
    title: {
        padding: 30,
        color: '#fff',
        fontSize: 65,
        fontWeight: '700'
    },
    loginForm: {
        width: '90%',
        marginHorizontal: 20,
        marginTop: 290
    },
    login: {
        width: 352,
        height: 70,
        paddingLeft: 155,
        paddingTop: 23,
        fontSize: 17,
        fontWeight: "700",
        backgroundColor: '#FFBA33',
        borderColor: '#FFBA33',
        color: '#000',
        opacity: 0.8
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