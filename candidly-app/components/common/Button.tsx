// components/common/Button.tsx
import { Text, Pressable, StyleSheet } from 'react-native';
import colors from '@/constants/colors';
import sizes from '@/constants/sizes';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: sizes.paddingMedium,
    paddingHorizontal: sizes.paddingLarge,
    borderRadius: sizes.borderRadiusMedium,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: sizes.fontMedium,
    fontWeight: '600',
  },
});
