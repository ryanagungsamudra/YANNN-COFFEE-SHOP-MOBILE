import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000000',
        opacity: 0.6,
        position: 'relative'
    },
    text: {
        color: 'white',
        fontSize: 65,
        lineHeight: 65,
        fontWeight: '700',
        textAlign: 'center',
        position: 'absolute',
        top: 190,
        left: 45
    },
    getStarted: {
        position: 'absolute',
        bottom: 45,
        left: 20,
        width: 352,
        height: 70,
        paddingLeft: 137,
        paddingTop: 23,
        fontSize: 17,
        fontWeight: "700",
        backgroundColor: '#FFBA33',
        borderColor: '#FFBA33',
        color: '#000',
        opacity: 0.85
    }
});

export default styles