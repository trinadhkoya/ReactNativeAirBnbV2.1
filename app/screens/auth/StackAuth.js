'use strict'

import Index                    from './Index'
import SignIn                   from './SignIn'
import SignUp                   from './SignUp'
import TabIndex                 from './../TabIndex'
import { StackNavigator }       from 'react-navigation'

const options = {
    header: null
}
const StackAuth = StackNavigator(
    {
        Index: {
            screen: Index
        },
        SignIn: {
            screen: SignIn
        },
        SignUp: {
            screen: SignUp
        },
        TabIndex: {
            screen: TabIndex
        }
    },
    {
        navigationOptions: options
    }
)

module.exports = StackAuth
