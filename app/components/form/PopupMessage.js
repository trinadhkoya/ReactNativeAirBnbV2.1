'use strict'
import React, { Component } from 'react'
import {
    TouchableOpacity, StyleSheet, View, Animated
} from 'react-native'

import Text                             from './Text'
import colors                           from './../../resources/styles/colors'
import Icon                             from 'react-native-vector-icons/SimpleLineIcons'

let bottom = -100
class PopupMessage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            deltaY: new Animated.Value(0)
        }
    }

    render() {
        let title = 'Error'
        let txtColor = colors.txtError
        let message = 'Server error, something went wrong.'
        const status = this.props.status || 'error'
        if(status === 'success') {
            txtColor = colors.txtSuccess
            title = 'Success'
            message = 'Data submitted successfully.'
        }

        title = this.props.title || title
        message = this.props.message || message

        return (
            <Animated.View { ...this.props } style={[ styles.holder, { transform: [
                {
                    translateY: this.state.deltaY.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, bottom - 25]
                    })
                }
            ]}]}>
                <View style={ styles.titleHolder }>
                    <Text type='h5' style={{ color: txtColor }}>{ title }</Text>
                    <TouchableOpacity onPress={ this.hide.bind(this) }>
                        <Icon name='close' size={20} color={ txtColor } />
                    </TouchableOpacity>
                </View>
                <Text type='span' style={[ styles.message, { color: txtColor } ]}>{ message }</Text>
            </Animated.View>
        )
    }

    _timeout = false

    show() {
        Animated.timing(this.state.deltaY,
        {
            toValue: 1,
            useNativeDriver: true
        }).start()

        if(this.timeout) {
            clearTimeout(this.timeout)
        }

        this.timeout = setTimeout(() => {
            this.hide()
        }, 3000)
    }

    hide() {
        Animated.timing(this.state.deltaY,
        {
            toValue: 0,
            useNativeDriver: true
        }).start()
    }
}

const styles = StyleSheet.create({
    holder: {
        left: 25,
        right: 25,
        position: 'absolute',
        bottom: bottom,
        zIndex: 1,
        padding: 20,
        paddingTop: 15,
        borderRadius: 5,
        backgroundColor: colors.bgWhite
    },
    titleHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    message: {
        marginTop: 5
    }
})

module.exports = PopupMessage
