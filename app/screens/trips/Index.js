'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, View
} from 'react-native'

import Container                from './../../components/Container'
import NavBar                   from './../../components/NavBar'
import Text                     from './../../components/form/Text'
import Button                   from './../../components/form/Button'
import Icon                     from 'react-native-vector-icons/SimpleLineIcons'
import colors                   from './../../resources/styles/colors'

class Trips extends Component {

    render() {
        return (
            <Container>
                <View style={ styles.navBar }>
                    <Text type='h5'>Trips</Text>
                </View>
                <View style={ styles.holder }>
                    <View style={ styles.titleHolder }>
                        <Text type='h3' style={ styles.title }>What will be your first advanture?</Text>
                    </View>

                    <View style={ styles.planeHolder }>
                        <Icon name='plane' size={50} style={ styles.plane } />
                    </View>
                    <View style={[ styles.verticalLine, { height: 40 } ]}></View>
                    <Button type='borderMain' title='Start Exploring' />
                    <View style={[ styles.verticalLine, { height: 200 } ]}></View>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdLine
    },
    holder: {
        alignItems: 'center'
    },
    titleHolder: {
        width: 300,
        alignItems: 'center',
        marginTop: 50
    },
    title: {
        textAlign: 'center'
    },
    planeHolder: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: colors.bgMain,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    plane: {
        color: colors.txtWhite
    },
    verticalLine: {
        backgroundColor: colors.bdLine,
        width: 2,
        marginVertical: 5
    }
})
module.exports = Trips
