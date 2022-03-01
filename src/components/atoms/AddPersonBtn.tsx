import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PersonScreenNavigationProp } from '@customTypes/navigation';
import { Button } from '@ui-kitten/components';
import { Entypo } from '@expo/vector-icons';

interface Props {
  businessId: string;
  businessName: string;
}

/**
 * This component sends the user to the AddPerson screen
 * @function AddPersonBtn
 * @param {string} businessId - The id of the business
 * @param {string} businessName - The name of the business
 * @author Rich Jimenez <richjimenez@me.com>
 */
const AddPersonBtn: FC<Props> = ({ businessId, businessName }): JSX.Element => {
  const nav = useNavigation<PersonScreenNavigationProp>();

  const addNewPerson = () => nav.push('Person', { title: 'Add New Person', businessId, businessName });
  const plusIcon = () => <Entypo name="plus" size={14} color="white" />;

  return (
    <Button size="small" onPress={addNewPerson} accessoryLeft={plusIcon} style={styles.btn}>
      ADD NEW PERSON
    </Button>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginVertical: 10,
  },
});

export default AddPersonBtn;
