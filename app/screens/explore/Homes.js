'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, View, ListView
} from 'react-native'

import Container                                from './../../components/Container'
import Text                                     from './../../components/form/Text'
import ThumbSingleItemWithPrice                 from './../../components/thumbs/SingleItemWithPrice'
import items                                    from './../../data/homes'
import NavBar                                   from './../../components/NavBar'
import colors                                   from './../../resources/styles/colors'

class Homes extends Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(items)
        }
    }

    render() {
        return (
            <Container>
                <NavBar navigator={ this.props.navigation } headerLeftIconStyle={ styles.headerLeftIconStyle } />
                <ListView
                    style={ styles.holder }
                    renderHeader={() => <Text style={ styles.screenTitle } type='h1'>Homes</Text>}
                    enableEmptySections={ true }
                    dataSource={ this.state.dataSource }
                    renderRow={ this.renderRow }
                    removeClippedSubviews={false}
                />
            </Container>
        )
    }

    renderRow = (rowData) => {
        return (
            <ThumbSingleItemWithPrice style={ styles.thumb } data={rowData} />
        )
    }
}

const styles = StyleSheet.create({
    headerLeftIconStyle: {
        color: colors.txtDark
    },
    screenTitle: {
        fontWeight: '700',
        paddingVertical: 30
    },
    holder: {
        paddingHorizontal: 25,
        flex: 1
    },
    thumb: {
        marginVertical: 20,
        marginHorizontal: 0
    }
})

module.exports = Homes
