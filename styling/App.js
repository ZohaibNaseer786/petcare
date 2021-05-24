import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: '2%',
        padding: '4%',
        borderRadius: 8,
        borderWidth: 0,
        borderColor: 'white',
        shadowOpacity: 0.2,
        elevation: 8,
        shadowOffset: {
            width: 2,
            height: 2
        },
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImage: {
        height: 32,
        width: 32,
        borderRadius: 16
    },
    info: {
        flexDirection: 'column',
        marginLeft: '2%'
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    userEmail: {
        color: '#ccc'
    },
    viewStyle: {
        marginVertical: '2%',
        borderColor: '#ccc',
        borderWidth: 0.5
    },
    tagContainer: {
        backgroundColor: '#FF1694',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: '2%',
        marginBottom: '4%',
        marginHorizontal: 4,
        padding: 4,
        borderRadius: 32,
    },
    tagText: {
        color: 'white',
    },
    linkText: {
        color: '#E75480',
        marginVertical: '2%'
    },
    likeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '2%'
    },
    likeText: {
        fontSize: 18
    },
    timeText: {
        fontSize: 18,
        color: '#ccc'
    },
    textStyle: {
        fontSize: 16,
        color: '#E75480',
        textDecorationLine: 'underline',
        marginVertical: '1%'
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        borderRadius: 12,
        margin: 5,
        borderColor: '#ccc',
        backgroundColor: '#FFFFFF',
    },
})