import React, { PropTypes } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

const propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    style: Text.propTypes.style,
    containerStyle: View.propTypes.style,
    text: PropTypes.string
};

const ImageButton = ({ onPress, disabled, style, text, imageUrl, imageStyle }) => (
    <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.75}
        style={{alignItems:'center'}}
        >
        <Image
            source={imageUrl}
            style={imageStyle}
            />
        <Text style={style}>
            {text}
        </Text>
    </TouchableOpacity>
);
ImageButton.propTypes = propTypes;

ImageButton.defaultProps = {
    onPress() { },
    disabled: false
};

export default ImageButton;