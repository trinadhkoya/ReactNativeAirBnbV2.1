'use strict'
import React, { Component } from 'react'

import { TabNavigator, TabBarBottom } from 'react-navigation'

import Explore              from './explore/StackExplore'
import Saved                from './saved/StackSaved'
import Trips                from './trips/StackTrips'
import Inbox                from './inbox/StackInbox'
import Profile              from './profile/StackProfile'
import SideMenu             from './SideMenu'
import colors               from './../resources/styles/colors'
import Icon                 from 'react-native-vector-icons/SimpleLineIcons'

const tabBarOptions = {
    activeTintColor: colors.txtMainRed,
    inactiveTintColor: colors.txtDark,
    style: {
        backgroundColor: colors.bgWhite,
        height: 55
    },
    labelStyle: {
        fontWeight: '700',
        marginBottom: 10,
        fontSize: 8
    }
}

class TabIcon extends Component {
    render() {
        return <Icon {...this.props } style={{ marginBottom: -5 }}  size={22}  />
    }
}

const TabIndexNavigator = TabNavigator({
    Explore: {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'EXPLORE',
            tabBarIcon: ({ tintColor }) => (
                <TabIcon name='magnifier' color={tintColor} />
            )
        }
    },
    Saved: {
        screen: Saved,
        navigationOptions: {
            tabBarLabel: 'SAVED',
            tabBarIcon: ({ tintColor }) => (
                <TabIcon name='heart' color={tintColor} />
            )
        }
    },
    Trips: {
        screen: Trips,
        navigationOptions: {
            tabBarLabel: 'TRIPS',
            tabBarIcon: ({ tintColor }) => (
                <TabIcon name='rocket' color={tintColor} />
            )
        }
    },
    Inbox: {
        screen: Inbox,
        navigationOptions: {
            tabBarLabel: 'INBOX',
            tabBarIcon: ({ tintColor }) => (
                <TabIcon name='bubble' color={tintColor} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({ tintColor }) => (
                <TabIcon name='user' color={tintColor} />
            )
        }
    }
}, {
    tabBarOptions: tabBarOptions,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true
});

class TabIndex extends Component {
    static navigationOptions = {
        gesturesEnabled: false
    }

    render() {
        const screenProps = {
            onMenuPress: this.onMenuPress
        }
        return (
            <SideMenu ref="menu">
                <TabIndexNavigator screenProps={ screenProps } />
            </SideMenu>
        )
    }

    onMenuPress = () => {
        this.refs['menu'].onMenuPress()
    }
}

module.exports = TabIndex
