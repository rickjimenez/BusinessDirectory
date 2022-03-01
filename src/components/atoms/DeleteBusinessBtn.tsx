import React, { FC } from 'react';
import { Alert } from 'react-native';
import { Button, Spinner } from '@ui-kitten/components';
import { Entypo } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { BusinessDetailsScreenRouteProp } from '@customTypes/navigation';
import { useDeleteBusiness } from '@hooks/businesses';

/**
 * This component handle the logic to open the edit business screen
 * @function DeleteBusinessBtn
 * @author Rich Jimenez <richjimenez@me.com>
 */
const DeleteBusinessBtn: FC = (): JSX.Element => {
  const route = useRoute<BusinessDetailsScreenRouteProp>();
  const { mutate, isLoading } = useDeleteBusiness();

  const BtnIcon = () => (isLoading ? <Spinner size="small" status="danger" /> : <Entypo name="trash" size={15} color="white" />);

  const removeBusiness = () => {
    Alert.alert(
      'Delete Businesses',
      'Are you sure you want to delete this business?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            const { businessId }: any = route.params;
            await mutate(businessId);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Button status="danger" accessoryLeft={BtnIcon} onPress={removeBusiness} disabled={isLoading}>
      {isLoading ? 'DELETING...' : 'DELETE'}
    </Button>
  );
};

export default DeleteBusinessBtn;
