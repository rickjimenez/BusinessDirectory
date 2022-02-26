import React, { FC } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Text } from '@ui-kitten/components';
import { useTheme } from '@react-navigation/native';
import { BusinessProps } from '../types/navigation';
import CustomText from '@components/atoms/CustomText';

export const Business: FC<BusinessProps> = ({ navigation }): JSX.Element => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: colors.text }}>Home Screen</Text>
      <CustomText text="hola" />
      <View style={{ backgroundColor: colors.card, width: 100, height: 400 }}>
        <CustomText text="hola" />
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
