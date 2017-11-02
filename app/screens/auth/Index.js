'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, TouchableOpacity, View, ScrollView
} from 'react-native'

import Container                from './../../components/Container'
import NavBar                   from './../../components/NavBar'
import Text                     from './../../components/form/Text'
import Button                   from './../../components/form/Button'
import colors                   from './../../resources/styles/colors'
import Icon                     from 'react-native-vector-icons/SimpleLineIcons'

class Index extends Component {

    onPress = () => {
        this.props.navigation.navigate('SignIn')
    }

    renderHeaderRight() {
        return <TouchableOpacity onPress={ this.onPress } style={{ paddingRight: 25 }}>
                    <Text type='h5White'>Log in</Text>
                </TouchableOpacity>
    }

    render() {
        const terms = "By tapping Continue, Create Account or More options, I agree to Airbnb's Terms of Service, Payments Terms of Service, Privacy Policy."
        return (
            <Container style={styles.container}>
                <NavBar navigator={ this.props.navigation } hideBackButton={true} headerRight={ this.renderHeaderRight() } />
                <ScrollView>
                    <View style={ styles.holder }>
                        <Icon name='rocket' size={70} style={ styles.logo } />
                        <Text type='h1White' style={ styles.siteName }>Welcome to Airbnb.</Text>

                        <View style={ styles.btnHolder }>
                            <Button type='facebook' title='Continue with Facebook'></Button>
                            <Button style={ styles.btnSignUp } title='Create Account'></Button>
                        </View>

                        <Text style={ styles.txtMoreOptions } type='h5White'>More options</Text>
                        <Text style={ styles.txtTerms } type='spanWhite'>{ terms }</Text>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}
const styText = { color: colors.txtWhite }
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgMainDark
    },
    holder: {
        padding: 25
    },
    headerRight: {
        paddingRight: 25
    },
    logo: {
        ...styText,
        marginTop: 10
    },
    siteName: {
        marginTop: 50,
        width: 200
    },
    btnHolder: {
        marginTop: 50
    },
    btnSignUp: {
        marginTop: 15
    },
    txtMoreOptions: {
        marginTop: 40
    },
    txtTerms: {
        marginTop: 15
    }
})


module.exports = Index
