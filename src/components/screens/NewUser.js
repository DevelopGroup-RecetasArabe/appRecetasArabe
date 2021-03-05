import React from 'react';
import {Text, Input, Button} from 'react-native-elements';
import {Dimensions, View,StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import SharedButton from '../shared/SharedButton';
import InputText from '../shared/InputText';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const NewUser = () => {
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <InputText title="Usuario" border={1} color='#245071'/>
                    <InputText title="Nombre y Apellido" border={1} color='#245071'/>
                    <InputText title="Correo" border={1} color='#245071'/>
                    <InputText title="Contraseña" border={1} color='#245071'/>
                    <InputText title="Confirmar Contraseña" border={1} color='#245071'/>
                    <SharedButton title="Guardar" size={0.5} colors={"#7c3593"}/>
                </ScrollView>        
            </SafeAreaView>
        </View>
    )
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width*0.80,
        height: height*0.98,
        backgroundColor:'#fff',
        margin: 'center',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        
    } , 
    scrollView: {
        margin: 20,
      },

}) 

export default NewUser;
