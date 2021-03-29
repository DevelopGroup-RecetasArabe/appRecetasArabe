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
            style={{ width: width, height: 300 }}
          />
        ) : (
          <Image>
            <Icon
              name="photo"
              type="font-awesome"
              size={280}
              color="#7c3593"
              style={{ opacity: 0.8 }}
            />
          </Image>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  styleImage: {
    width: width,
    height: 300,
    backgroundColor: "#CDCDCD",
  },
});

export default ImageButton;
