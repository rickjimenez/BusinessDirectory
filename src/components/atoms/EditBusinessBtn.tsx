import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@ui-kitten/components';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BusinessScreenNavigationProp } from '@customTypes/navigation';

interface Props {
  businessId: string;
  businessName: string;
}

/**
 * This component handle the logic to open the edit business screen
 * @function EditBusinessBtn
 * @param {string} businessId
 * @param {string} businessName
 * @author Rich Jimenez <richjimenez@me.com>
 */
const EditBusinessBtn: FC<Props> = ({ businessId, businessName }): JSX.Element => {
  const nav = useNavigation<BusinessScreenNavigationProp>();

  const BtnIcon = () => <Entypo name="edit" size={15} color="white" />;

  const editBusiness = () => {
    nav.push('Business', { businessId, businessName, title: 'Edit Business' });
  };

  return (
    <Button accessoryLeft={BtnIcon} style={styles.btn} onPress={editBusiness}>
      EDIT
    </Button>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginBottom: 10,
  },
});

export default EditBusinessBtn;
