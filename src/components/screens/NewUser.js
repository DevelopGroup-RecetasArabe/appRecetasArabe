import React from 'react';
import {View,StyleSheet, ScrollView} from 'react-native';
import SharedButton from '../shared/SharedButton';
import InputText from '../shared/InputText';


const NewUser = ({navigation}) => {
    return (
        <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.inputs}>
                    <InputText title="Usuario" border={1} color='#245071'/>
                    <InputText title="Nombre y Apellido" border={1} color='#245071'/>
                    <InputText title="Correo" border={1} color='#245071'/>
                    <InputText title="Contraseña" border={1} color='#245071'/>
                    <InputText title="Confirmar Contraseña" border={1} color='#245071'/>
                    </View>
                    <View style={styles.but}>
                    <SharedButton title="Guardar" size={0.5} colors={"#7c3593"}
                        callback={ () => navigation.navigate("Login")}
                    />
                    </View>
                </ScrollView>       
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebecf2',
        justifyContent: 'center',

    }, 
    scrollView: {
        padding: 30,
    },
    inputs:{
        paddingTop: 15,
        justifyContent: 'center',
    },
    but:{
        paddingTop: 20,
        alignItems: 'center',
    },
}) 

export default NewUser;