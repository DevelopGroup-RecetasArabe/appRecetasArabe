import React from 'react';
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
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
    },
})

export default ChangePassword;