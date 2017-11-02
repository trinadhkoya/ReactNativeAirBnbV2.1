'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, View, ScrollView, Dimensions
} from 'react-native'

import Container                                from './../../components/Container'
import Grid                                     from './../../components/Grid'
import Text                                     from './../../components/form/Text'
import ThumbDestination                         from './../../components/thumbs/Destination'
import items                                    from './../../data/places'
import NavBar                                   from './../../components/NavBar'
import colors                                   from './../../resources/styles/colors'

let {width} = Dimensions.get('window')
class Places extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let thumbWidth = (width - 60) / 2
        let itemThumbs = (
            items.map((item, idx) => {
               return <ThumbDestination style={ styles.thumb } width={thumbWidth} key={ item.id } data={item}/>
            })
        )
        return (
            <Container>
                <NavBar navigator={ this.props.navigation } headerLeftIconStyle={ styles.headerLeftIconStyle } />
                <ScrollView>
                    <Text style={ styles.screenTitle } type='h1'>Places</Text>
                    <Grid>
                        { itemThumbs }
                    </Grid>
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    headerLeftIconStyle: {
        color: colors.txtDark
    },
    screenTitle: {
        fontWeight: '700',
        paddingVertical: 30,
        paddingHorizontal: 25
    },
    holder: {
        paddingHorizontal: 25,
        flex: 1
    },
    thumb: {
        marginBottom: 30
    }
})

module.exports = Places
