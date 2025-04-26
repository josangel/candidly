import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{t('welcome')}</Text>
      <Text style={styles.subtitle}>{t('subtitle')}</Text>

      <View style={styles.linkContainer}>
        <Link href="/(tabs)/simulator" style={styles.link}>
          Ir al Simulador →
        </Link>
        <Link href="/(tabs)/link" style={styles.link}>
          Vincular Pareja →
        </Link>

        <Link href="/(tabs)/mediator" style={styles.link}>
          Mediador Virtual →
        </Link>

        <Link href="/(tabs)/reports" style={styles.link}>
          Ver Reportes →
        </Link>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#E8F3F1',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#0D3B66',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#3F8C7C',
    marginBottom: 32,
  },
  linkContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  link: {
    fontSize: 16,
    color: '#0077cc',
    textDecorationLine: 'underline',
  },
});
