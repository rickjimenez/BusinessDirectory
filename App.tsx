import React from 'react';
import { useColorScheme } from 'react-native';
import * as eva from '@eva-design/eva';
import { AppearanceProvider } from 'react-native-appearance';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { QueryClient, QueryClientProvider } from 'react-query';
import Toast from 'react-native-toast-message';
import { AppNavigator } from '@navigations/navigation';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const queryClient = new QueryClient();

const App: React.FC = () => {
  const scheme = useColorScheme();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <AppearanceProvider>
        <QueryClientProvider client={queryClient}>
          <ApplicationProvider {...eva} theme={scheme === 'light' ? eva.light : eva.dark}>
            <AppNavigator />
          </ApplicationProvider>
        </QueryClientProvider>
      </AppearanceProvider>
      <Toast />
    </>
  );
};

export default App;
