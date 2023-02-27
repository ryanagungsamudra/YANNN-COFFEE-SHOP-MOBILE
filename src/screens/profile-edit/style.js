import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 14,
        fontWeight: "700",
        opacity: 0.75
    },
    hero: {
        width: 130,
        height: 130,
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
        paddingLeft: 91,
        paddingRight: 91,
        padding: 20,
        fontSize: 17,
        fontWeight: "700",
    }
});

export default styles