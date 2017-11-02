'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, View, ScrollView, Dimensions, TouchableOpacity
} from 'react-native'

import Container                            from './../../components/Container'
import Swiper                               from './../../components/Swiper'
import ListPanel                            from './../../components/ListPanel'
import Text                                 from './../../components/form/Text'
import Button                               from './../../components/form/Button'
import ThumbSingleItemWithPrice             from './../../components/thumbs/SingleItemWithPrice'
import ThumbDestination                     from './../../components/thumbs/Destination'
import colors                               from './../../resources/styles/colors'
import Icon                                 from 'react-native-vector-icons/SimpleLineIcons'
import FAIcon                               from 'react-native-vector-icons/FontAwesome'
import exploreData                          from './../../data/explore'

let {width} = Dimensions.get('window')
class Explore extends Component {

    render() {
        return (
            <Container statusBarStyle={ styles.statusBarStyle }>
                { this.renderNavBar() }
                <ScrollView>
                    { this.renderHeader() }
                    { this.renderHomeList() }
                    { this.renderFeaturedDestinations() }
                    { this.renderPlaces() }
                </ScrollView>
            </Container>
        )
    }

    renderNavBar() {
        return (
            <View style={ styles.navBar }>
                <TouchableOpacity onPress={ this.props.screenProps.onMenuPress }>
                    <FAIcon name='bars' size={22} style={{ color: colors.txtWhite }} />
                </TouchableOpacity>
            </View>
        )
    }

    renderHeader() {
        return (
            <View style={ styles.headerHolder }>
                <Icon name='rocket' size={60} style={ styles.logo } />
                <Text type='h3White' style={ styles.siteName }>Welcome to Medellin, Colombia</Text>
                <Button
                    onPress={ this.onPressItinerary }
                    titleStyle={ styles.btnHeaderTitleStyle }
                    style={ styles.btnHeader }
                    title='View itinerary' />
            </View>
        )
    }

    renderHomeList() {
        let itemThumbs = (
            exploreData.homes.map((item, idx) => {
               return <ThumbSingleItemWithPrice key={ item.id } data={item}/>
            })
        )
        return (
            <ListPanel
                title='Homes'
                onPressSeeAll={ this.onPressSeeAll.bind(this, 'Homes') }>
                    <Swiper>
                        { itemThumbs }
                    </Swiper>
            </ListPanel>
        )
    }

    renderFeaturedDestinations() {
        let itemThumbs = (
            exploreData.destinations.map((item, idx) => {
               return <ThumbDestination key={ item.id } data={item}/>
            })
        )
        return (
            <ListPanel
                hideSeeAll={true}
                title='Featured destinations'>
                    <Swiper>
                        { itemThumbs }
                    </Swiper>
            </ListPanel>
        )
    }

    renderPlaces() {
        let thumbWidth = width / 3
        let itemThumbs = (
            exploreData.places.map((item, idx) => {
               return <ThumbDestination width={thumbWidth} key={ item.id } data={item}/>
            })
        )
        return (
            <ListPanel
                title='Places in Detroit'
                onPressSeeAll={ this.onPressSeeAll.bind(this, 'Places') }>
                    <Swiper>
                        { itemThumbs }
                    </Swiper>
            </ListPanel>
        )
    }

    onPressSeeAll(index) {
        this.props.navigation.navigate(index)
    }

    onPressItinerary = () => {
        this.props.navigation.navigate('MyScreen')
    }
}

const styText = { color: colors.txtWhite }
const styles = StyleSheet.create({
    statusBarStyle: {
        backgroundColor: colors.bgMainRed
    },
    navBar: {
        height: 50,
        justifyContent: 'center',
        backgroundColor: colors.bgMainRed,
        paddingHorizontal: 25
    },
    headerHolder: {
        padding: 25,
        backgroundColor: colors.bgMainRed
    },
    logo: {
        ...styText,
        marginTop: 10
    },
    siteName: {
        marginTop: 30,
        width: 250
    },
    btnHeader: {
        width: 160,
        height: 40,
        marginVertical: 70,
        borderWidth: 2
    },
    btnHeaderTitleStyle: {
        fontSize: 14,
        fontWeight: '700'
    }
})
module.exports = Explore
