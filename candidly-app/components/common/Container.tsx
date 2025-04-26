// components/common/Container.tsx
import { View, StyleSheet, ViewProps } from 'react-native';
import colors from '@/constants/colors';
import sizes from '@/constants/sizes';

export default function Container({ children, style, ...props }: ViewProps & { children: React.ReactNode }) {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: sizes.paddingMedium,
  },
});
