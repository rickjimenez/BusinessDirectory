import React, { FC } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, ListRenderItemInfo } from 'react-native';
import { Button, Text, Card } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { BusinessScreenNavigationProp, BusinessScreenProps } from '@customTypes/navigation';
import Loading from '@components/atoms/Loading';
import Toast from 'react-native-toast-message';
import { TBusiness } from '@customTypes/business';
import { Entypo } from '@expo/vector-icons';
import { useGetBusinesses } from '@hooks/businesses';

interface Props {
  item: TBusiness;
}

const Item: FC<Props> = ({ item }): JSX.Element => {
  const nav = useNavigation<BusinessScreenNavigationProp>();

  const goToBusiness = (businessId: string) => {
    nav.push('BusinessDetails', { businessId });
  };

  return (
    <Card style={{ marginTop: 10 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text category="h6">{item.name}</Text>
        <Button size="tiny" onPress={() => goToBusiness(item.businessId)}>
          View
        </Button>
      </View>
    </Card>
  );
};

/**
 * This component handle the list for the business
 * @function Businesses
 * @author Rich Jimenez <richjimenez@me.com>
 */
export const Businesses: FC<BusinessScreenProps> = ({ navigation }): JSX.Element => {
  const { data, error, isError, isLoading, isRefetching, refetch } = useGetBusinesses();

  if (isError && error) {
    Toast.show({
      type: 'error',
      text1: 'Error on getting business',
    });
  }

  const renderItem = ({ item }: ListRenderItemInfo<TBusiness>) => <Item item={item} />;
  const plusIcon = () => <Entypo name="plus" size={24} color="white" />;
  const addNewBusiness = () => navigation.push('Business', { title: 'Add New Business' });

  return (
    <SafeAreaView style={styles.container}>
      <Loading show={isLoading} feedbackText="Getting Businesses" />
      <View style={styles.listContainer}>
        {data && data.businesses.length >= 1 ? (
          <FlatList
            data={data.businesses}
            renderItem={renderItem}
            keyExtractor={(item) => item.businessId}
            refreshing={isRefetching}
            onRefresh={refetch}
          />
        ) : (
          <Card status="info">
            <Text>No Businesses Available</Text>
          </Card>
        )}
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Entypo name="plus" size={24} color="white" />
        <Button accessoryLeft={plusIcon} onPress={addNewBusiness}>
          ADD NEW BUSINESS
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 32,
  },
});
