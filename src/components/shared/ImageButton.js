import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { Image, Icon } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const ImageButton = ({ image, callback }) => {
  return (
    <View>
      <TouchableOpacity style={styles.styleImage} onPress={callback}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={{height: height *0.40,borderRadius: 40 }}
          />
        ) : (
          <View style={styles.icon}>
            <Image>
              <Icon
                name="photo"
                type="font-awesome"
                size={250}
                color="#7c3593"
                style={{ opacity: 0.8 }}
              />

          </Image>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  styleImage: {
    //width: width,
    height: height *0.40,
    backgroundColor: "#CDCDCD",
    borderRadius: 40,
  },
  icon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
});

export default ImageButton;
