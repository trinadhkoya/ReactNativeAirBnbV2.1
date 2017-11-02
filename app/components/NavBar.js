'use strict'
import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import Icon             from 'react-native-vector-icons/SimpleLineIcons'
import colors           from './../resources/styles/colors'

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let txtMarginLeft = (this.props.hideBackButton) ? 0 : -18
        let btnBack = (
            <TouchableOpacity style={ styles.btnback } onPress={() => this._pressBtnBack()}>
                <Icon name='arrow-left' style={[ styles.icon, this.props.headerLeftIconStyle || {} ]} size={16} />
            </TouchableOpacity>
        )
        return (
            <View style={[ styles.bar, this.props.style || {} ]}>
                { !this.props.hideBackButton && btnBack}
                <View style={ styles.titleHolder }>
                    <Text style={[ styles.text, this.props.titleStyle || {}, { marginLeft: txtMarginLeft }]}>{ this.props.title }</Text>
                </View>
                { this.props.headerRight || null }
            </View>
        )
    }

    _pressBtnBack() {
        this.props.navigator.goBack();
    }
}

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        height: 45,
        alignItems: 'center'
    },
    titleHolder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: colors.txtWhite,
        fontWeight: '700'
    },
    icon: {
        color: colors.txtWhite,
        backgroundColor: 'transparent'
    },
    btnback: {
        padding: 10,
        marginLeft: 10
    }
})

module.exports = NavBar
