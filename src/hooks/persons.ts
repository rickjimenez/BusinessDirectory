import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createNewPerson, deletePerson, getPersons, updatePerson } from '@services/bussiness';
import { useNavigation } from '@react-navigation/native';
import { PersonScreenNavigationProp } from '@customTypes/navigation';
import Toast from 'react-native-toast-message';

/**
 * This hook gets persons on the business
 * @function usePersons
 * @author Rich Jimenez <richjimenez@me.com>
 */
export const useGetPersons = (businessId: string) => {
  return useQuery(['persons', businessId], () => getPersons(businessId));
};

/**
 * This hook handle the Creation person mutation
 * @function useCreatePerson
 * @author Rich Jimenez <richjimenez@me.com>
 */
export const useCreatePerson = () => {
  const nav = useNavigation<PersonScreenNavigationProp>();
  const queryClient = useQueryClient();
  return useMutation(createNewPerson, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['persons']);
      Toast.show({
        type: 'success',
        text1: 'Person created successfully',
      });
      nav.goBack();
    },
  });
};

/**
 * This hook handle the Update person mutation
 * @function useUpdatePerson
 * @author Rich Jimenez <richjimenez@me.com>
 */
export const useUpdatePerson = () => {
  const nav = useNavigation<PersonScreenNavigationProp>();
  const queryClient = useQueryClient();
  return useMutation(updatePerson, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['persons']);
      Toast.show({
        type: 'success',
        text1: 'Person updated successfully',
      });
      nav.goBack();
    },
  });
};

/**
 * This hook handle to Delete person mutation
 * @function useCreatePerson
 * @author Rich Jimenez <richjimenez@me.com>
 */
export const useDeletePerson = () => {
  const nav = useNavigation<PersonScreenNavigationProp>();
  const queryClient = useQueryClient();
  return useMutation(deletePerson, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['persons']);
      Toast.show({
        type: 'success',
        text1: 'Person deleted successfully',
      });
      nav.goBack();
    },
  });
};
