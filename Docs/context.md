import { Slot } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { theme } from '../theme/theme';
import { SupabaseProvider } from '../contexts/SupabaseContext';

export default function RootLayout() {
return (
<SupabaseProvider>
<PaperProvider theme={theme}>
<Slot />
</PaperProvider>
</SupabaseProvider>
);
}
