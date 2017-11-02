'use strict'
import React, { Component } from 'react'
import {
    AppRegistry
} from 'react-native'

import { TabNavigator }         from 'react-navigation'
import StackAuth                from './screens/auth/StackAuth'

class App extends Component {
    render() {
        return <StackAuth />
    }
}

AppRegistry.registerComponent('Airbnb', () => App);
