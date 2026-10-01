import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import CustomInput from '../components/CustomInputComponents';
import { loginStyles } from '../styles/LoginStyles';

export default function ExemploLoginScreen({ navigation }: any) {
  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.content}>

        <View style={loginStyles.logoArea}>
          <Text style={loginStyles.title}>
            Meu Aplicativo
          </Text>

          <Text style={loginStyles.subtitle}>
            Entre na sua conta para continuar
          </Text>
        </View>

        <View style={loginStyles.form}>

          <Text style={loginStyles.label}>
            E-mail
          </Text>

          <TextInput
            style={loginStyles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#9CA3AF"
          />

          <Text style={loginStyles.label}>
            Senha
          </Text>

          <TextInput
            style={loginStyles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
          />

          <TouchableOpacity
            style={loginStyles.forgotPasswordContainer}
          >
            <Text style={loginStyles.linkText}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={loginStyles.loginButton}>
            <Text style={loginStyles.loginButtonText}
            onPress={() => navigation.navigate('Form')}>
              Entrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
                   
                      onPress={() => navigation.navigate('Form')}
                    >
          
                      <View >
                        <Text>➕</Text>
                      </View>
          
                      <Text>
                        Cadastrar Produto
                      </Text>
          
                    </TouchableOpacity>

          <View style={loginStyles.createAccountContainer}>
            <Text style={loginStyles.createAccountText}>
              Não possui uma conta?
            </Text>

            <Text style={loginStyles.createAccountLink}>
              Criar conta
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}