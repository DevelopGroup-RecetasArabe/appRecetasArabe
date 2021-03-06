import React from 'react';
<<<<<<< HEAD
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
=======
import {StyleSheet,View } from 'react-native';
import SharedButton from '../shared/SharedButton';
import InputText from '../shared/InputText';

const ChangePassword = ({navigation}) =>{
    return ( 
        <View style={styles.container}>
            <View style={styles.inputs}>
                <InputText title="Usuario" border={1} color='#245071' />
                <InputText title="Contraseña" border={1} color='#245071'/>
                <InputText title="Confirmar Contraseña" border={1} color='#245071'/>
            </View>
            <View style={styles.but}>
                    <SharedButton title="Guardar" size={0.5} colors={"#7c3593"}
                        callback={ () => navigation.navigate("Login")}
                    />
            </View>
>>>>>>> 6a2f435c869147670520fe7add8ed2aa99a7f76a
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
<<<<<<< HEAD
        justifyContent:'center',
        alignItems:'center',

=======
        backgroundColor: '#ebecf2',
        justifyContent:'center',
    },
    inputs:{
        paddingTop: 20,
        justifyContent: 'center',
        padding: 30,
    },
    but:{
        paddingTop: 20,
        alignItems: 'center',
>>>>>>> 6a2f435c869147670520fe7add8ed2aa99a7f76a
    },
})

export default ChangePassword;