import type { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import type { RouteProp } from '@react-navigation/native';
import { TPerson } from '@customTypes/business';

export type RootStackParamList = {
  Businesses: undefined;
  Business: { businessId?: string; businessName?: string; title: string };
  BusinessDetails: { businessId: string };
  Person: { businessId: string; businessName: string; person?: TPerson; title: string };
};

export type BusinessScreenProps = StackScreenProps<RootStackParamList, 'Businesses'>;
export type BusinessScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Business'>;
export type AddBusinessScreenProps = StackScreenProps<RootStackParamList, 'Business'>;

export type BusinessDetailsScreenRouteProp = RouteProp<RootStackParamList, 'BusinessDetails'>;
export type BusinessScreenDetailsProps = StackScreenProps<RootStackParamList, 'BusinessDetails'>;

export type AddPersonScreenProps = StackScreenProps<RootStackParamList, 'Person'>;
export type PersonScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Person'>;
