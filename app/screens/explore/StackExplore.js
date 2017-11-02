'use strict'

import Index                    from './Index'
import Homes                    from './Homes'
import Places                   from './Places'
import { StackNavigator }       from 'react-navigation'

const options = {
    header: null
}
const StackExplore = StackNavigator(
    {
        Index: {
            screen: Index
        },
        Homes: {
            screen: Homes
        },
        Places: {
            screen: Places
        }
    },
    {
        navigationOptions: options
    }
)

module.exports = StackExplore
