import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '900',
        marginLeft: 40,
        marginTop: 30,
    },
    searchIcon: {
        width: 18,
        height: 18,
        position: 'absolute',
        top: 46,
        left: 52,
        zIndex: 2
    },
    searchInput: {
        borderRadius: 15,
        width: 330,
        height: 50,
        marginTop: 30,
        marginLeft: 35,
        marginBottom: 20,
        borderWidth: 0.3,
        paddingLeft: 46,
        backgroundColor: '#EFEEEE',
        fontSize: 17,
    },
    breadcumb: {
        fontSize: 19,
        fontWeight: '700',
        color: '#9A9A9D',
        marginLeft: 40,
    },
    seeMore: {
        color: '#6A4029',
        fontWeight: '400',
        fontSize: 15,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 310
    },
    cardWrap: {
        width: Dimensions.get('window').width / 1.5,
        padding: 15,
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#fff',
        elevation: 10,
        height: 250,
        width: '95%',
        borderRadius: 60,
        marginTop: 15,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    productTitle: {
        fontSize: 22,
        fontWeight: '900',
        color: '#6A4029',
        textAlign: "center"
    },
    productPrice: {
        fontSize: 17,
        fontWeight: '700',
        textAlign: "center"
    }
});

export default styles