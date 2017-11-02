'use strict'

import Index                    from './Index'
import Alerts                   from './Alerts'
import Search                   from './Search'
import Chat                     from './Chat'
import { StackNavigator }       from 'react-navigation'

const options = {
    header: null
}
const StackInbox = StackNavigator(
    {
        Index: {
            screen: Index
        },
        Alerts: {
            screen: Alerts
        },
        Search: {
            screen: Search
        },
        Chat: {
            screen: Chat
        }
    },
    {
        navigationOptions: options
    }
)

module.exports = StackInbox
