import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardWrap: {
        display: 'flex',
        width: Dimensions.get('window').width / 1.5,
        padding: 15,
        alignItems: 'center'
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 60,
        width: 315,
        borderRadius: 20,
        marginTop: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'relative'
    },
    hero: {
        width: 130,
        height: 130,
        borderRadius: 100,
        borderWidth: 1.5,
        borderColor: '#6A4029'
    },
    edit: {
        width: 35,
        height: 35,
        position: 'absolute',
        bottom: 2,
        right: 2
    },
    header: {
        fontWeight: '900',
        fontSize: 34,
        marginTop: 60
    },
    title: {
        fontSize: 17,
        fontWeight: '700'
    },
    saveChange: {
        marginTop: 30,
        paddingLeft: 103,
        paddingRight: 103,
        padding: 20,
        fontSize: 17,
        fontWeight: "700",
    }
});

export default styles