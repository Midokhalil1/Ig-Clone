import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({

    feed: {
        marginTop: 50,
        flex: 1,
        backgroundColor: 'white',

    },

    card: {
        marginVertical: 30,
    },


    description: {
        margin: 10,
    },


    image: {
        width: '100%',
        height: 430,
        aspectRatio: 1,
        flex: 1,


    },

    cardHeader: {
        margin: 4,
        flexDirection: 'row',

    },

    userName: {
        margin: 8,
        fontSize: 18,
        fontWeight: '600',
    },




})

export default styles;