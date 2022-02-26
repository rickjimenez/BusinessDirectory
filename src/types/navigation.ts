import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Business: undefined;
  BusinessDetails: { businessId: string };
};

export type BusinessProps = StackScreenProps<RootStackParamList, 'Business'>;
export type BusinessDetailsProps = StackScreenProps<RootStackParamList, 'Business'>;
