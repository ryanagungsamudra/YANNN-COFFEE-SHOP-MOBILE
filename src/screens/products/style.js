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
        elevation: 10,
        height: 180,
        width: '100%',
        borderRadius: 30,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    productTitle: {
        fontSize: 22,
        fontWeight: '900',
        color: '#6A4029'
    },
    productPrice: {
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 5
    }
});

export default styles