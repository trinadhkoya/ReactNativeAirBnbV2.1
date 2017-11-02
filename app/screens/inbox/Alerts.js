'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, View, ListView, TouchableOpacity, Image
} from 'react-native'

import Container                from './../../components/Container'
import NavBar                   from './../../components/NavBar'
import Text                     from './../../components/form/Text'
import Icon                     from 'react-native-vector-icons/SimpleLineIcons'
import colors                   from './../../resources/styles/colors'
import alertsData               from './../../data/alerts'

class Alerts extends Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(alertsData),
        }
    }

    render() {
        return (
            <Container>
                <NavBar navigator={ this.props.navigation } headerLeftIconStyle={ styles.headerLeftIconStyle } />
                <ListView
                    style={ styles.holder }
                    renderHeader={() => <View style={ styles.header }>
                        <Text style={styles.screenTitle} type='h1'>Alerts</Text>
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
            <TouchableOpacity onPress={(rowData) => this._onPressRow(rowData) } style={ styles.row }>
                <Image style={ styles.avatar } source={{ uri: rowData.avatarUri }} />
                <View style={ styles.rightPart }>
                    <View style={ styles.detail }>
                        <Text ellipsizeMode='tail' numberOfLines={2}>
                            <Text style={ styles.username }>{ rowData.username }</Text> { rowData.description }
                        </Text>
                    </View>
                    <Text style={ styles.createdDate }>{ rowData.createdDate }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _onPressRow(rowData) {

    }

    onPressAlerts = () => {
        this.props.navigation.navigate('Alerts')
    }
}

const styles = StyleSheet.create({
    headerLeftIconStyle: {
        color: colors.txtDark
    },
    screenTitle: {
        fontWeight: '700'
    },
    holder: {
        paddingHorizontal: 25
    },
    header: {
        paddingVertical: 15
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdLine,
        paddingVertical: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10
    },
    detail: {
        flexDirection: 'row',
        paddingRight: 60
    },
    createdDate: {
        marginTop: 3
    },
    rightPart: {
        height: 50,
        justifyContent: 'center'
    },
    username: {
        color: '#000000',
        fontWeight: '500'
    }
})

module.exports = Alerts
