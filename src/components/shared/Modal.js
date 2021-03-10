import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";




const ShowModal = () => {
    const [modalOpen, setmodalOpen] = useState(false);
    return(
         
        <View>
            <TouchableOpacity style={StyleSheet.modalOpen}
                onPress= {() => setmodalOpen(true)}
            >
                        
                <Text>Abrir Modal</Text>

            </TouchableOpacity>
            <Modal visible={setmodalOpen}>
                <View style= {StyleSheet.modalcontent}>

                    <Text>Bienvenido a Recetas Arabes </Text>
                    <TouchableOpacity style={StyleSheet.modalclose}
                      onPress= {() => setmodalOpen(false)}
                    >
                        
                        <Text>X</Text>

                    </TouchableOpacity>
                </View>
            </Modal>
        </View>  
    )
    

    

}   

const styles = StyleSheet.create({
    txtBoton: {
      textAlign: "center",
      fontSize: 16,
    },
    modalcontent:{
        flex: 1,
        height: height*0.1,
        margin: 50,
        padding: 40,
        borderRadius: 10,

    },
    modalclose:{
        marginTop:20 ,
        marginBottom: 0,
        right: 10,
    },
    modalOpen:{
        marginTop:20 ,
        marginBottom: 0,
        right: 10,
    },
  });
  
export default ShowModal;