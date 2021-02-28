import React from 'react';
import {StyleSheet,Text,View } from 'react-native';
import SharedButton from '../shared/SharedButton';
import InputText from '../shared/InputText';

const ChangePassword = () =>{
    return (
        <View style={styles.container}>
            <InputText title="Usuario" border={1} color='#245071' />
            <InputText title="Contraseña" border={1} color='#245071'/>
            <InputText title="Confirmar Contraseña" border={1} color='#245071'/>
            <SharedButton title="Guardar" size={0.5} colors={"#7c3593"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
})

export default ChangePassword;