import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Text } from '@ui-kitten/components';
import { useTheme } from '@react-navigation/native';
import { BusinessDetailsProps } from '../types/navigation';

export const BusinessDetails: FC<BusinessDetailsProps> = ({ navigation, route }): JSX.Element => {
  const { colors } = useTheme();
  console.log(route);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: colors.text }}>Home Screen</Text>
      <View style={{ backgroundColor: colors.card, width: 100, height: 400 }}>
        <Text>ddedded</Text>
      </View>
      <Button
        appearance="filled"
        onPress={() => {
          navigation.push('BusinessDetails', { businessId: '1' });
        }}
      >
        FILLED
      </Button>
    </View>
  );
};
