// app/(tabs)/+not-found.tsx

import { Link } from 'expo-router';
import { Container, Button, Header } from '@/components';
import { Text, StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  return (
    <Container>
      <Header title="Pantalla no encontrada" />
      <Text style={styles.text}>
        Parece que te perdiste. No encontramos la pantalla que buscas.
      </Text>
      <Link href="/(tabs)/simulator" asChild>
        <Button title="Volver al Inicio" onPress={() => {}} />
      </Link>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginVertical: 16,
    textAlign: 'center',
  },
});
