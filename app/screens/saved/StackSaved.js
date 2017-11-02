'use strict'

import Index                    from './Index'
import colors                   from './../../resources/styles/colors'
import { StackNavigator }       from 'react-navigation'

const options = {
    header: null
}
const StackSaved = StackNavigator(
    {
        Index: {
            screen: Index
        }
    },
    {
        navigationOptions: options
    }
)

module.exports = StackSaved
