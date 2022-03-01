import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from '@ui-kitten/components';
import phoneFormatter from 'phone-formatter';
import { Entypo, Octicons } from '@expo/vector-icons';
import { TPerson } from '@customTypes/business';
import { useNavigation } from '@react-navigation/native';
import { BusinessScreenNavigationProp } from '@customTypes/navigation';

interface Props {
  item: TPerson;
  businessId: string;
  businessName: string;
}

const Header = (props: any) => (
  <View {...props}>
    <View style={styles.headerContainer}>
      <Octicons name="person" size={38} color="grey" style={styles.personIcon} />
      <View>
        <Text category="h6">{props.name}</Text>
        <Text category="s1">{props.role}</Text>
      </View>
    </View>
  </View>
);

/**
 * This component shows the person item for the list
 * @function PersonItem
 * @param {TPerson} item
 * @param {string} businessId
 * @param {string} businessName
 * @author Rich Jimenez <richjimenez@me.com>
 */
const PersonItem: FC<Props> = ({ item, businessId, businessName }): JSX.Element => {
  const nav = useNavigation<BusinessScreenNavigationProp>();
  const BtnIcon = () => <Entypo name="edit" size={14} color="white" />;

  const editPerson = () => {
    nav.push('Person', { businessId, businessName, person: item, title: 'Edit Person' });
  };

  return (
    <Card style={styles.card} header={<Header name={item.name} role={item.role} />}>
      <Text category="label">
        Phone: <Text category="c1">{phoneFormatter.format(item.phone, '(NNN) NNN-NNNN')}</Text>
      </Text>
      <Text category="label">
        Email: <Text category="c1">{item.email}</Text>
      </Text>
      <Text category="label">
        Join Date: <Text category="c1">{item.join_date}</Text>
      </Text>
      <Button style={styles.editBtn} size="tiny" accessoryLeft={BtnIcon} onPress={editPerson}>
        EDIT
      </Button>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    margin: 2,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  personIcon: {
    marginRight: 10,
  },
  editBtn: {
    marginTop: 10,
  },
});

export default PersonItem;
