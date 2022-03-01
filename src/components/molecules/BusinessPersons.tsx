import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { Spinner, Card, Text } from '@ui-kitten/components';
import PersonItem from '@components/atoms/PersonItem';
import { useGetPersons } from '@hooks/persons';

interface Props {
  businessId: string;
  businessName: string;
}

/**
 * This component handle the persons list of a business
 * @function BusinessPersons
 * @param {string} businessId
 * @param {string} businessName
 * @author Rich Jimenez <richjimenez@me.com>
 */
const BusinessPersons: FC<Props> = ({ businessId, businessName }): JSX.Element => {
  const { data, isLoading } = useGetPersons(businessId);
  const renderItem = ({ item }: any) => <PersonItem item={item} businessName={businessName} businessId={businessId} />;

  return (
    <>
      {isLoading ? (
        <View style={{ alignItems: 'center', padding: 30 }}>
          <Spinner size="small" style={{ justifyContent: 'center' }} />
          <Text category="c1">Getting people...</Text>
        </View>
      ) : data && data.persons.length >= 1 ? (
        <View style={{ flexGrow: 1 }}>
          <FlatList data={data.persons} renderItem={renderItem} keyExtractor={(item) => item.personId} />
        </View>
      ) : (
        <Card style={{ marginBottom: 10 }}>
          <Text category="s1">No persons here.</Text>
        </Card>
      )}
    </>
  );
};

export default BusinessPersons;
