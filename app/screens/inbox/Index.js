'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, View, ListView, TouchableOpacity, Image
} from 'react-native'

import Container                from './../../components/Container'
import Text                     from './../../components/form/Text'
import Icon                     from 'react-native-vector-icons/SimpleLineIcons'
import colors                   from './../../resources/styles/colors'
import inboxData                from './../../data/inbox'

class Inbox extends Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(inboxData),
        }
    }

    render() {
        return (
            <Container>
                <View style={ styles.navBar }>
                    <TouchableOpacity onPress={ this.onPressAlerts }>
                        <Icon style={ styles.icon } name='bell' size={16} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ this.onPressSearch }>
                        <Icon style={[ styles.icon, { marginLeft: 30 } ]} name='magnifier' size={16} />
                    </TouchableOpacity>
                </View>

                <ListView
                    style={ styles.holder }
                    renderHeader={() => <View style={ styles.header }>
                        <Text style={styles.screenTitle} type='h1'>Inbox</Text>
                        <Text>You have no unread messages</Text>
                    </View>}
                    enableEmptySections={ true }
                    dataSource={ this.state.dataSource }
                    renderRow={(rowData) => this._renderRow(rowData) }
                    removeClippedSubviews={false}
                />
            </Container>
        )
    }

    _renderRow(rowData) {
        return (
            <TouchableOpacity onPress={ this._onPressRow } style={ styles.row }>
                <Image style={ styles.avatar } source={{ uri: rowData.avatarUri }} />
                <View style={ styles.rightPart }>
                    <View style={ styles.detail }>
                        <Text style={ styles.username }>{ rowData.username }</Text>
                        <Text style={ styles.createdDate }>{ rowData.createdDate }</Text>
                    </View>
                    <Text style={ styles.description } ellipsizeMode='tail' numberOfLines={2}>{ rowData.description }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _onPressRow = (rowData) => {
        this.props.navigation.navigate('Chat')
    }

    onPressAlerts = () => {
        this.props.navigation.navigate('Alerts')
    }

    onPressSearch = () => {
        this.props.navigation.navigate('Search')
    }
}

const styles = StyleSheet.create({
    screenTitle: {
        fontWeight: '700'
    },
    navBar: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 15
    },
    icon: {
        color: colors.txtDark,
        padding: 10
    },
    holder: {
        paddingHorizontal: 25
    },
    header: {
        paddingBottom: 30,
        paddingTop:15
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 20,
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdLine
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    detail: {
        flexDirection: 'row'
    },
    description: {
        marginTop: 3,
        paddingRight: 60
    },
    createdDate: {
        fontWeight: '300'
    },
    rightPart: {
        height: 50,
        justifyContent: 'center'
    },
    username: {
        fontWeight: '700',
        marginRight: 10
    }
})

module.exports = Inbox
