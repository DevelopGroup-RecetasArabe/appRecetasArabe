import React from 'react';
import {View, Image} from 'react-native';

const LogoBar = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Image
            source={{
                uri:
                String(require("../../assets/logoBar.png"))
            }}
            style={{
                width: 50,
                height: 50,
                marginLeft: 15,
            }}
        />
        </View>
    );
};

export default LogoBar;