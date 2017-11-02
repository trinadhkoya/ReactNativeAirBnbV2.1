import React, { Component } from 'react'
import {
    StyleSheet, TextInput
} from 'react-native'

import colors from './../../resources/styles/colors'

class InputSearch extends Component {
    render() {
        return (
            <TextInput
                returnKeyType='search'
                autoCorrect={false}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Search'
                placeholderTextColor={ colors.txtDescription }
                style={ styles.input } { ...this.props } />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        color: colors.txtMain,
        fontWeight: '700',
        backgroundColor: 'transparent',
        lineHeight: 50,
        fontSize: 32
    }
})

module.exports = InputSearch
