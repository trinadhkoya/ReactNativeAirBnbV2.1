import React, { Component } from 'React'
import {
    View, Image, StyleSheet, Dimensions
} from 'react-native'

import colors               from './../../resources/styles/colors'
import Text                 from './../form/Text'

class SingleItem extends Component {
    render() {
        let data = this.props.data
        let imgWidth = (this.props.width) ? this.props.width : Dimensions.get('window').width / 4
        let imgHeight = imgWidth * data.ratio

        return (
            <View style={[ styles.holder, this.props.style || {} ]}>
                <Image style={{ width: imgWidth, height: imgHeight }} source={{ uri: data.thumb }} />
                <Text numberOfLines={1} ellipsizeMode='tail' style={[ styles.name, { width: imgWidth } ]}>{ data.name }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    name: {
        fontWeight: '700',
        paddingTop: 5
    },
    holder: {
        marginHorizontal: 5
    }
})

module.exports = SingleItem
