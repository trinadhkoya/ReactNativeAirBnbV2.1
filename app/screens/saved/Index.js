'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, View, ListView
} from 'react-native'

import Container                        from './../../components/Container'
import Text                             from './../../components/form/Text'
import ThumbSingleItem                  from './../../components/thumbs/SingleItem'
import ThumbMultipleItems               from './../../components/thumbs/MultipleItems'
import items                            from './../../data/saved'


class Saved extends Component {

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
                <ListView
                    style={ styles.holder }
                    renderHeader={() => <Text style={ styles.screenTitle } type='h1'>Saved</Text>}
                    enableEmptySections={ true }
                    dataSource={ this.state.dataSource }
                    renderRow={ this.renderRow }
                    removeClippedSubviews={false}
                />
            </Container>
        )
    }

    renderRow = (rowData) => {
        if(rowData.thumbs.length >= 3) {
            let thumbs = rowData.thumbs
            let formatData = {
                name: rowData.name,
                bigImageUri: thumbs[0]['uri'],
                smallTopImageUri: thumbs[1]['uri'],
                smallBottomImageUri: thumbs[2]['uri'],
                description: rowData.description
            }
            return <ThumbMultipleItems data={formatData} />
        } else {
            let thumb = rowData.thumbs[0]
            let formatData = {
                name: rowData.name,
                description: rowData.description,
                thumb: thumb.uri,
                ratio: thumb.ratio
            }
            return (
                <ThumbSingleItem data={formatData} />
            )
        }

    }
}

const styles = StyleSheet.create({
    screenTitle: {
        fontWeight: '700',
        paddingTop: 50,
        paddingBottom: 30
    },
    holder: {
        paddingHorizontal: 25,
        flex: 1
    }
})

module.exports = Saved
