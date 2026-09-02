import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { dashboardStyles } from '../styles/DashboardStyles';

export default function ExemploDashboardScreen() {
  return (
    <View style={dashboardStyles.container}>

      <ScrollView
        contentContainerStyle={dashboardStyles.content}
      >

        {/* Cabeçalho */}
        <View style={dashboardStyles.header}>

          <View style={dashboardStyles.greetingArea}>
            <Text style={dashboardStyles.greeting}>
              Olá,
            </Text>

            <Text style={dashboardStyles.userName}>
              João
            </Text>
          </View>

          <View style={dashboardStyles.headerActions}>

            <TouchableOpacity
              style={dashboardStyles.headerIconButton}
            >
              <Text>🔔</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={dashboardStyles.headerIconButton}
            >
              <Text>👤</Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* Resumo */}
        <Text style={dashboardStyles.sectionTitle}>
          Resumo
        </Text>

        <View style={dashboardStyles.metricsContainer}>

          <View style={dashboardStyles.metricCard}>
            <Text style={dashboardStyles.metricLabel}>
              Produtos
            </Text>

            <Text style={dashboardStyles.metricValue}>
              25
            </Text>

            <Text style={dashboardStyles.metricDetail}>
              Cadastrados
            </Text>
          </View>

          <View style={dashboardStyles.metricCard}>
            <Text style={dashboardStyles.metricLabel}>
              Categorias
            </Text>

            <Text style={dashboardStyles.metricValue}>
              8
            </Text>

            <Text style={dashboardStyles.metricDetail}>
              Disponíveis
            </Text>
          </View>

        </View>

        {/* Ações */}
        <Text style={dashboardStyles.sectionTitle}>
          Ações rápidas
        </Text>

        <View style={dashboardStyles.quickActionsContainer}>

          <TouchableOpacity
            style={dashboardStyles.actionButton}
          >

            <View style={dashboardStyles.actionIcon}>
              <Text>➕</Text>
            </View>

            <Text style={dashboardStyles.actionText}>
              Cadastrar Produto
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={dashboardStyles.actionButton}
          >

            <View style={dashboardStyles.actionIcon}>
              <Text>📋</Text>
            </View>

            <Text style={dashboardStyles.actionText}>
              Listar Produtos
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={dashboardStyles.actionButton}
          >

            <View style={dashboardStyles.actionIcon}>
              <Text>📁</Text>
            </View>

            <Text style={dashboardStyles.actionText}>
              Categorias
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={dashboardStyles.actionButton}
          >

            <View style={dashboardStyles.actionIcon}>
              <Text>⚙️</Text>
            </View>

            <Text style={dashboardStyles.actionText}>
              Configurações
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

      {/* Menu inferior */}
      <View style={dashboardStyles.bottomNavigation}>

        <TouchableOpacity
          style={[
            dashboardStyles.navigationButton,
            dashboardStyles.navigationButtonActive,
          ]}
        >
          <Text>🏠</Text>

          <Text
            style={dashboardStyles.navigationTextActive}
          >
            Início
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={dashboardStyles.navigationButton}
        >
          <Text>📋</Text>

          <Text style={dashboardStyles.navigationText}>
            Produtos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={dashboardStyles.navigationButton}
        >
          <Text>👤</Text>

          <Text style={dashboardStyles.navigationText}>
            Perfil
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}