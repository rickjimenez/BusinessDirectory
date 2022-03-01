import React, { FC } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text } from '@ui-kitten/components';
import { BusinessScreenDetailsProps } from '../types/navigation';
import { StyleSheet } from 'react-native';
import Loading from '@components/atoms/Loading';
import BusinessPersons from '@components/molecules/BusinessPersons';
import DeleteBusinessBtn from '@components/atoms/DeleteBusinessBtn';
import EditBusinessBtn from '@components/atoms/EditBusinessBtn';
import AddPersonBtn from '@components/atoms/AddPersonBtn';
import { useGetBusinessInfo } from '@hooks/businesses';

/**
 * This component handle the details of the business
 * @function BusinessDetails
 * @author Rich Jimenez <richjimenez@me.com>
 */
export const BusinessDetails: FC<BusinessScreenDetailsProps> = ({ route }): JSX.Element => {
  const { businessId } = route.params;
  const { data, isLoading } = useGetBusinessInfo(businessId);

  return (
    <SafeAreaView style={styles.container}>
      <Loading show={isLoading} feedbackText="Getting Businesses Info" />
      {data && (
        <View style={styles.wrap}>
          <Text category="h2">{data.name}</Text>
          <AddPersonBtn businessName={data.name} businessId={data.businessId} />
          <View style={styles.personsList}>
            <BusinessPersons businessId={businessId} businessName={data.name} />
          </View>
          <EditBusinessBtn businessName={data.name} businessId={data.businessId} />
          <DeleteBusinessBtn />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
  },
  personsList: {
    flexGrow: 1,
    flex: 1,
  },
});
