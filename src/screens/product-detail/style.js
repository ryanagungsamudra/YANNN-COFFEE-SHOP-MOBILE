import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    hero: {
        marginTop: 50,
        width: 300,
        height: 300
    },
    title: {
        fontSize: 28,
        fontWeight: "900",
        marginTop: -40
    },
    price: {
        fontSize: 22,
        fontWeight: "700",
        color: "#6A4029",
        marginTop: 10
    },
    deliveryInfo: {
        fontSize: 17,
        fontWeight: "900",
        marginTop: 20
    },
    deliveryText: {
        fontSize: 15,
        fontWeight: "400",
        marginTop: 10,
        lineHeight: 20
    },
    description: {
        fontSize: 17,
        fontWeight: "900",
        marginTop: 10
    },
    descriptionText: {
        fontSize: 15,
        fontWeight: "400",
        marginTop: 10,
        textAlign: "justify",
        lineHeight: 20
    },
    addToCart: {
        marginTop: 30,
        paddingLeft: 110,
        paddingRight: 110,
        padding: 20,
        fontSize: 17,
        fontWeight: "700"
    },
});

export default styles