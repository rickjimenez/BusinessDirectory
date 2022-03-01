import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createNewBusiness, deleteBusiness, getBusiness, getBusinesses, updateBusiness } from '@services/bussiness';
import Toast from 'react-native-toast-message';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BusinessDetailsScreenRouteProp, BusinessScreenNavigationProp } from '@customTypes/navigation';

/**
 * This hook get all the businesses
 * @function useBusinessDetails
 * @author Rich Jimenez <richjimenez@me.com>
 */
export const useGetBusinesses = () => {
  return useQuery(['businesses'], getBusinesses);
};

/**
 * This hook get the business details
 * @function useGetBusiness
 * @author Rich Jimenez <richjimenez@me.com>
 */
export const useGetBusinessInfo = (businessId: string) => {
  return useQuery(['businesses', businessId], () => getBusiness(businessId));
};

/**
 * This hook handle the creation of person
 * @function useCreateBusiness
 * @author Rich Jimenez <richjimenez@me.com>
 */
export const useCreateBusiness = () => {
  const queryClient = useQueryClient();
  const nav = useNavigation<BusinessScreenNavigationProp>();
  return useMutation(createNewBusiness, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['businesses']);
      nav.goBack();
    },
  });
};

/**
 * This hook handle the Update person mutation
 * @function useUpdatePerson
 * @author Rich Jimenez <richjimenez@me.com>
 */
export const useUpdateBusiness = () => {
  const queryClient = useQueryClient();
  const nav = useNavigation<BusinessScreenNavigationProp>();
  return useMutation(updateBusiness, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['businesses']);
      Toast.show({
        type: 'success',
        text1: 'Business updated successfully',
      });
      nav.goBack();
    },
  });
};

/**
 * This hook handle to delete business mutation
 * @function useDeleteBusiness
 * @author Rich Jimenez <richjimenez@me.com>
 */
export const useDeleteBusiness = () => {
  const nav = useNavigation<BusinessScreenNavigationProp>();
  const route = useRoute<BusinessDetailsScreenRouteProp>();
  const queryClient = useQueryClient();
  return useMutation(deleteBusiness, {
    onSuccess: async () => {
      const { businessId } = route.params;
      queryClient.setQueryData(['businesses'], (data: any) => {
        return { businesses: data.businesses.filter((item: any) => item.businessId !== businessId) };
      });
      Toast.show({
        type: 'success',
        text1: 'Business deleted successfully',
      });
      nav.goBack();
    },
  });
};
