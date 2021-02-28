import React from 'react';
import {StyleSheet,Text,View, Dimensions, } from 'react-native';
import { Input } from 'react-native-elements';



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const InputText = ({
    title,
    icon,
    border,
    borderBottom,
    color,
}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.inputText}>{title}</Text>
            <Input
                color={'#245071'}
                style={styles.input, {borderWidth:border,borderColor:color, }}
                inputContainerStyle={{borderBottomWidth:borderBottom, borderColor:"#245071"}}
                leftIcon={{ type: 'font-awesome', name: icon }}
                
            />
        </View>
    )

}

const styles =  StyleSheet.create({
    container: {
        marginBottom:22,
        
    },
    input:{
        padding:8,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:'none',

    },
    inputText: {
        marginLeft:width*.025,
        marginBottom:10,
        fontSize:16,
        color:'#245071',
    }
});

export default InputText;