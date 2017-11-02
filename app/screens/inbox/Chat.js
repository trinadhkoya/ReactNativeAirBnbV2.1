'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, View, TextInput, Image, ScrollView
} from 'react-native'

import Container                from './../../components/Container'
import NavBar                   from './../../components/NavBar'
import Text                     from './../../components/form/Text'
import Icon                     from 'react-native-vector-icons/SimpleLineIcons'
import colors                   from './../../resources/styles/colors'
import chatData                 from './../../data/chat'

class Chat extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container >
                <NavBar
                    title='User Name'
                    navigator={ this.props.navigation }
                    headerLeftIconStyle={ styles.headerLeftIconStyle }
                    titleStyle={ styles.titleStyle }
                />
                <View style={ styles.holder }>
                    <ScrollView contentContainerStyle={ styles.scrollView }>
                        <View style={ styles.row }>
                            <Image style={ styles.avatar} source={{ uri: 'https://scontent-frt3-1.cdninstagram.com/t51.2885-15/s640x640/e15/15623603_1636005733360687_308770619158167552_n.jpg' }} />
                            <View style={ styles.textHolder }>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
                            </View>
                        </View>

                        <View style={ styles.rowOwner }>
                            <View style={ styles.textHolderOwner }>
                                <Text type='spanWhite'>sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
                            </View>
                            <Image style={ styles.avatarOwner } source={{ uri: 'https://a0.muscache.com/im/pictures/bf140aa5-4321-4b0a-9cdf-8005b0c4f84a.jpg?aki_policy=profile_small' }} />
                        </View>

                        <View style={ styles.row }>
                            <Image style={ styles.avatar} source={{ uri: 'https://scontent-frt3-1.cdninstagram.com/t51.2885-15/s640x640/e15/15623603_1636005733360687_308770619158167552_n.jpg' }} />
                            <View style={ styles.textHolder }>
                                <Text>consectetur adipiscing elit</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <TextInput
                        placeholder='Enter your message here'
                        underlineColorAndroid='rgba(0,0,0,0)'
                        style={ styles.input } />
                </View>

            </Container>
        )
    }
}

const avatar = {
    width: 40,
    height: 40,
    borderRadius: 20
}
const row = {
    flexDirection: 'row',
    marginTop: 20
}
const textHolder = {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.bgChat,
    borderRadius: 5,
    maxWidth: 230
}
const styles = StyleSheet.create({
    headerLeftIconStyle: {
        color: colors.txtDark
    },
    titleStyle: {
        color: colors.txtDark
    },
    holder: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 15
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        paddingBottom: 40
    },
    input: {
        height: 40,
        color: colors.txtDark,
        fontSize: 16,
        borderRadius: 3
    },
    row: row,
    rowOwner: {
        ...row,
        justifyContent: 'flex-end'
    },
    avatar: {
        ...avatar,
        marginRight: 10
    },
    avatarOwner: {
        ...avatar,
        marginLeft: 10
    },
    textHolder: textHolder,
    textHolderOwner: {
        ...textHolder,
        backgroundColor: colors.bgMain
    }
})

module.exports = Chat
