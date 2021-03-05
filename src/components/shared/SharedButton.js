import React from 'react';
import {Dimensions, StyleSheet,View, TouchableOpacity,Text} from 'react-native';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const SharedButton = ({
    title,
    size,
    colors,
    callback,
}) => {
    return (
        <View>
            <TouchableOpacity style={[styles.boton, {width:width*size, backgroundColor:colors}]} onPress={callback} >
                <Text style={styles.txtBoton}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    boton: {
        textAlign:"center",
        color:"#fff",
        borderRadius:10,
        padding:15,
        marginLeft: 20,
    },
    txtBoton: {
        textAlign:"center",
        color:'#fff',
        fontSize:16,
    },
})

export default SharedButton;