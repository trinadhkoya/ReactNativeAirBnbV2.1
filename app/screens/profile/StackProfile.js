'use strict'

import Index                    from './Index'
import { StackNavigator }       from 'react-navigation'

const options = {
    header: null
}
const StackProfile = StackNavigator(
    {
        Index: {
            screen: Index
        }
    },
    {
        navigationOptions: options
    }
)

module.exports = StackProfile
