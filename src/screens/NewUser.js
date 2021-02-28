import React from 'react'
import {Text, Input, Button} from 'react-native-elements'
import {Dimensions, StyleSheet, View} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const NewUser = () => {
    return (
        <View style={styles.container}>
        <Text>Usuario</Text>
        <Input style={styles.inputstyle} placeholder = "JuanAmaelFalafel2000" />
        <Text>Nombre y Apellido</Text>
        <Input style={styles.inputstyle} placeholder = "Juan Lopez" />
        <Text>Correo</Text>
        <Input style={styles.inputstyle} placeholder = "juanl@example.com" />
        <Text>Contraseña</Text>
        <Input style={styles.inputstyle} type = 'password' placeholder = "*****" />
        <Text>Confirmar Contraseña</Text>
        <Input style={styles.inputstyle} type = 'password' placeholder = "*****" />
        <Button style={styles.buttonstyle} title = "Guardar" /> 
    </View>
    )
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    } , 

    inputstyle: {
        width: width*0.5,
        height: 35,
        borderRadius: 15,
        borderColor: 'Black',
    },
    buttonstyle:{
        borderRadius: 15,
        marginTop: 20,
        Color: '#7c3593',
    },
}) 

export default NewUser;
