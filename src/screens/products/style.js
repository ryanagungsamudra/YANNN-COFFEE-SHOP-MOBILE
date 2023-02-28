import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: '700',
        marginLeft: 60,
        marginTop: 10,
    },
    cardWrap: {
        width: Dimensions.get('window').width / 2,
        padding: 15,
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        height: 190,
        width: '95%',
        borderRadius: 40,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    productTitle: {
        fontSize: 20,
        fontWeight: '900',
        color: '#6A4029',
        textAlign: 'center'
    },
    productPrice: {
        fontSize: 15,
        fontWeight: '700',
        paddingBottom: 10
    }
});

export default styles