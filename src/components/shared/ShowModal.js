import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, Alert, Pressable, Dimensions } from "react-native";


const { width, height } = Dimensions.get("screen");
const ShowModal = () => {


    const [Visible, set] = useState(false);
    return (
    <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={Visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                set(!Visible);
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Text style={styles.modalText}>Bienvenido a Recetas Arabes!</Text>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!Visible)}
                >
                    <Text style={styles.textStyle}>Disfrute!</Text>
                </Pressable>
                </View>
            </View>
            </Modal>
    </View>
    );

}
const styles = StyleSheet.create({
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
buttonOpen: {
  backgroundColor: "#F194FF",
},
buttonClose: {
  backgroundColor: "#2196F3",
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
}
});


export default ShowModal;