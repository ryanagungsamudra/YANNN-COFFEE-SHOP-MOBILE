import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardWrap: {
        display: 'flex',
        width: Dimensions.get('window').width / 1,
        padding: 15,
        alignItems: 'center'
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        // elevation: 10,
        height: 102,
        width: 315,
        borderRadius: 30,
        marginTop: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative'
    },
    hero: {
        width: 95,
        height: 95,
        position: 'absolute',
        top: 15,
        left: 0
    },
    title: {
        fontWeight: '700',
        fontSize: 17
    },
    price: {
        fontWeight: '400',
        fontSize: 15,
        color: '#895537'
    },
    confirmAndCheckout: {
        paddingLeft: 65,
        paddingRight: 65,
        padding: 20,
        fontSize: 17,
        fontWeight: "700"
    }
});

export default styles