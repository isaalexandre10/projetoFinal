import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { formStyles } from '../styles/FormStyles';

export default function ExemploFormScreen() {
  return (
    <ScrollView
      style={formStyles.container}
      contentContainerStyle={formStyles.scrollContent}
    >
      <View style={formStyles.header}>
        <Text style={formStyles.title}>
          Cadastrar Produto
        </Text>

        <Text style={formStyles.subtitle}>
          Preencha os dados abaixo para cadastrar
          um novo produto.
        </Text>
      </View>

      <View style={formStyles.formCard}>
        {/* Nome */}
        <View style={formStyles.fieldContainer}>
          <Text style={formStyles.label}>
            Nome do produto
            <Text style={formStyles.required}> *</Text>
          </Text>

          <TextInput
            style={formStyles.input}
            placeholder="Digite o nome do produto"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Categoria */}
        <View style={formStyles.fieldContainer}>
          <Text style={formStyles.label}>
            Categoria
          </Text>

          <TextInput
            style={formStyles.input}
            placeholder="Digite a categoria"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Preço */}
        <View style={formStyles.fieldContainer}>
          <Text style={formStyles.label}>
            Preço
          </Text>

          <TextInput
            style={formStyles.input}
            placeholder="R$ 0,00"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
          />
        </View>

        {/* Quantidade */}
        <View style={formStyles.fieldContainer}>
          <Text style={formStyles.label}>
            Quantidade
          </Text>

          <TextInput
            style={formStyles.input}
            placeholder="Digite a quantidade"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
          />
        </View>

        {/* Descrição */}
        <View style={formStyles.fieldContainer}>
          <Text style={formStyles.label}>
            Descrição
          </Text>

          <TextInput
            style={formStyles.textArea}
            placeholder="Digite uma descrição do produto"
            placeholderTextColor="#9CA3AF"
            multiline
            numberOfLines={5}
          />
        </View>

        {/* Exemplo visual de erro */}
        <View style={formStyles.fieldContainer}>
          <Text style={formStyles.label}>
            Código
          </Text>

          <TextInput
            style={[
              formStyles.input,
              formStyles.inputError,
            ]}
            placeholder="Digite o código"
            placeholderTextColor="#9CA3AF"
          />

          <Text style={formStyles.errorText}>
            Este campo é obrigatório.
          </Text>
        </View>

        {/* Botões */}
        <View style={formStyles.buttonContainer}>
          <TouchableOpacity style={formStyles.cancelButton}>
            <Text style={formStyles.cancelButtonText}>
              Cancelar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={formStyles.saveButton}>
            <Text style={formStyles.saveButtonText}>
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}