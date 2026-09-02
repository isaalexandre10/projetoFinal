import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { listStyles } from '../styles/ListStyles';

export default function ExemploListScreen() {
  return (
    <View style={listStyles.container}>
      {/* Cabeçalho */}
      <View style={listStyles.header}>

        <Text style={listStyles.title}>
          Produtos
        </Text>

        {/* Pesquisa */}
        <View style={listStyles.searchContainer}>

          <Text style={listStyles.searchIcon}>
            🔍
          </Text>

          <TextInput
            style={listStyles.searchInput}
            placeholder="Pesquisar produto..."
            placeholderTextColor="#9CA3AF"
          />

        </View>
      </View>
      <ScrollView
        contentContainerStyle={listStyles.listContent}
      >

        {/* Produto 1 */}
        <View style={listStyles.card}>
          <View style={listStyles.cardHeader}>
            <View style={listStyles.cardTitleContainer}>
              <Text style={listStyles.cardTitle}>
                Notebook Dell
              </Text>

              <Text style={listStyles.cardSubtitle}>
                Informática
              </Text>

            </View>

            <View
              style={[
                listStyles.badge,
                listStyles.badgeActive,
              ]}
            >
              <Text
                style={[
                  listStyles.badgeText,
                  listStyles.badgeTextActive,
                ]}
              >
                ATIVO
              </Text>
            </View>
          </View>

          <Text style={listStyles.cardDescription}>
            Notebook Dell Core i5, 8GB de memória
            e SSD de 512GB.
          </Text>

          <View style={listStyles.cardFooter}>

            <TouchableOpacity style={listStyles.editButton}>
              <Text style={listStyles.editButtonText}>
                Editar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={listStyles.deleteButton}>
              <Text style={listStyles.deleteButtonText}>
                Excluir
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Produto 2 */}
        <View style={listStyles.card}>
          <View style={listStyles.cardHeader}>
            <View style={listStyles.cardTitleContainer}>
              <Text style={listStyles.cardTitle}>
                Mouse Gamer
              </Text>

              <Text style={listStyles.cardSubtitle}>
                Acessórios
              </Text>
            </View>

            <View
              style={[
                listStyles.badge,
                listStyles.badgePending,
              ]}
            >
              <Text
                style={[
                  listStyles.badgeText,
                  listStyles.badgeTextPending,
                ]}
              >
                PENDENTE
              </Text>
            </View>

          </View>

          <Text style={listStyles.cardDescription}>
            Mouse gamer com iluminação RGB e
            seis botões configuráveis.
          </Text>

          <View style={listStyles.cardFooter}>

            <TouchableOpacity style={listStyles.editButton}>
              <Text style={listStyles.editButtonText}>
                Editar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={listStyles.deleteButton}>
              <Text style={listStyles.deleteButtonText}>
                Excluir
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* Produto 3 */}
        <View style={listStyles.card}>

          <View style={listStyles.cardHeader}>

            <View style={listStyles.cardTitleContainer}>

              <Text style={listStyles.cardTitle}>
                Teclado Mecânico
              </Text>

              <Text style={listStyles.cardSubtitle}>
                Acessórios
              </Text>

            </View>

            <View
              style={[
                listStyles.badge,
                listStyles.badgeInactive,
              ]}
            >
              <Text
                style={[
                  listStyles.badgeText,
                  listStyles.badgeTextInactive,
                ]}
              >
                INATIVO
              </Text>
            </View>

          </View>

          <Text style={listStyles.cardDescription}>
            Teclado mecânico com iluminação
            e conexão USB.
          </Text>

          <View style={listStyles.cardFooter}>

            <TouchableOpacity style={listStyles.editButton}>
              <Text style={listStyles.editButtonText}>
                Editar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={listStyles.deleteButton}>
              <Text style={listStyles.deleteButtonText}>
                Excluir
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}