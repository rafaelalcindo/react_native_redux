import React, { Component } from 'react'
import api from '../../services/api'

import { View } from 'react-native'
import { Container, Input, Button, ButtonText, Error } from './styles'

export default class Login extends Component {

    state = { username: ''};

    handleSubmit = () => {}

    render() {
        const { username } = this.state;
        
        return (
            <Container>
                <Input
                    value={username}
                    onChangeText={text => this.setState({ username: text })}
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    placeholder="Digite seu usuário" 
                />
                <Button onPress={this.handleSubmit} >
                    <ButtonText>Entrar</ButtonText>
                </Button>
            </Container>
        )
    }
}