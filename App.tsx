import React from 'react';
import * as eva from '@eva-design/eva';
import { AppearanceProvider } from 'react-native-appearance';
import { ApplicationProvider, Layout, Text, IconRegistry, Icon, Button } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

import { Pressable, StyleSheet, useColorScheme, View } from 'react-native';

import { getBusiness, saveBusiness } from './src/services/bussiness';
import { Business } from './src/screens/Business';
import { AppNavigator } from './src/navigations/navigation';

const App: React.FC = () => {
  const scheme = useColorScheme();

  const getData = async () => {
    const result = await getBusiness();
    console.log('res', result);
  };

  const FacebookIcon = (props: any) => <Icon name="facebook" {...props} />;

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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
