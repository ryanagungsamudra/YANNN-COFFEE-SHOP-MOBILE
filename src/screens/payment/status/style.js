import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    hero: {
        width: 329,
        height: 202,
        borderRadius: 20,
        marginLeft: -5,
        marginTop: 20
    },
    title: {
        fontWeight: '700',
        fontSize: 25,
        marginTop: 45,
        textAlign: "left",
        width: '100%'
    },
    product: {
        fontWeight: '700',
        fontSize: 16,
        color: '#000000'
    },
    size: {
        fontWeight: '400',
        fontSize: 14,
        color: '#000000'
    },
    price: {
        fontWeight: '400',
        fontSize: 16,
        color: '#000000',
    },
    lineBottom: {
        borderBottomWidth: 0.4,
        borderBottomColor: '#6A4029',
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    totalPayment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 40,
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        marginTop: 10,
        paddingHorizontal: 15,
    },
    confirmAndCheckout: {
        marginTop: 25,
        width: 312,
        height: 70,
        fontSize: 17,
        fontWeight: "700",
        padding: 0,
        marginTop: -20,
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: "center"
    }
});

export default styles