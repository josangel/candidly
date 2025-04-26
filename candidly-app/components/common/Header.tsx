// components/common/Header.tsx
import { Text, StyleSheet } from 'react-native';
import colors from '@/constants/colors';
import sizes from '@/constants/sizes';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return <Text style={styles.header}>{title}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: sizes.fontLarge,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: sizes.paddingMedium,
  },
});
