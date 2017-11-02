'use strict'

import Index                    from './Index'
import { StackNavigator }       from 'react-navigation'

const options = {
    header: null
}
const StackTrips = StackNavigator(
    {
        Index: {
            screen: Index
        }
    },
    {
        navigationOptions: options
    }
)

module.exports = StackTrips
