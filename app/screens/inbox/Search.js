'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, View, ListView, TouchableOpacity, Image
} from 'react-native'

import Container                from './../../components/Container'
import NavBar                   from './../../components/NavBar'
import Text                     from './../../components/form/Text'
import InputSearch              from './../../components/form/InputSearch'
import colors                   from './../../resources/styles/colors'
import Icon                     from 'react-native-vector-icons/SimpleLineIcons'

let recentSearches = [
    'Beautiful Places', 'Hotel', 'Experience'
]

class Search extends Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(recentSearches),
        }
    }

    render() {
        return (
            <Container>
                <NavBar navigator={ this.props.navigation } headerLeftIconStyle={ styles.headerLeftIconStyle } />
                <View style={ styles.holder }>
                    <View style={ styles.searchHolder }>
                        <InputSearch />
                    </View>
                </View>
                <ListView
                    style={ styles.holder }
                    renderHeader={() => this.renderHeader() }
                    enableEmptySections={ true }
                    dataSource={ this.state.dataSource }
                    renderRow={(rowData) => this._renderRow(rowData) }
                    removeClippedSubviews={false}
                />
            </Container>
        )
    }

    renderHeader() {
        return (
            <View style={ styles.recentSeachesTitleHolder }>
                <Text type='h5' style={ styles.recentSeachesTitle }>Recent searches</Text>
                <TouchableOpacity onPress={ this._clearRecentSearches }>
                    <Icon style={ styles.icoClose } name='close' size={ 20 } />
                </TouchableOpacity>
            </View>
        )
    }

    _renderRow(rowData) {
        return (
            <TouchableOpacity onPress={ this._onSubmit }>
                <Text style={ styles.searchStr }>{ '"' + rowData + '"' }</Text>
            </TouchableOpacity>
        )
    }

    _clearRecentSearches = () => {

    }

    _onSubmit = () => {

    }
}

const styles = StyleSheet.create({
    headerLeftIconStyle: {
        color: colors.txtDark
    },
    holder: {
        paddingHorizontal: 25
    },
    searchHolder: {
        paddingBottom: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdLine
    },
    recentSeachesTitleHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    recentSeachesTitle: {
        marginBottom: 10
    },
    searchStr: {
        marginBottom: 10
    },
    icoClose: {
        color: colors.txtDark
    }
})

module.exports = Search
