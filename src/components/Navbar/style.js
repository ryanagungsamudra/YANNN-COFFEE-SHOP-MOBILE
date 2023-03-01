import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navbar: {
        height: 90,
        backgroundColor: '#ffffff',
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 46,
        paddingLeft: 46,
        elevation: 10
    },
    hamburger: {
        marginTop: 49.5,
        width: 20,
        height: 16
    },
    cart: {
        marginTop: 45,
        width: 22,
        height: 22
    },
});

export default styles