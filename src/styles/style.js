import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    alignedContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        justifyContent:'center'
    },
    button: {
        color: '#ff5858'
    },
    inlinedChildren: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        padding: 5
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});