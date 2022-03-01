import React, { FC, useState } from 'react';
import { Button, Input, Spinner } from '@ui-kitten/components';
import { SafeAreaView, View } from 'react-native';
import { AddBusinessScreenProps } from '@customTypes/navigation';
import { useCreateBusiness, useUpdateBusiness } from '@hooks/businesses';

/**
 * This component handle the create and update actions for the business
 * @function Business
 * @author Rich Jimenez <richjimenez@me.com>
 */
const Business: FC<AddBusinessScreenProps> = ({ route }): JSX.Element => {
  const { businessId, businessName } = route.params;
  const [name, setName] = useState<string>(businessName || '');

  const { mutate, isLoading } = useCreateBusiness();
  const { mutate: mutateEdit, isLoading: isLoadingEdit } = useUpdateBusiness();

  const loading = isLoading || isLoadingEdit;

  const saveBusiness = (): void => {
    if (loading) return;
    if (businessId) {
      mutateEdit({ businessId, name });
    } else {
      mutate(name);
    }
  };
  const loadingIndicator = (): JSX.Element => (loading ? <Spinner size="small" /> : <></>);

  return (
    <SafeAreaView>
      <View style={{ padding: 10 }}>
        <Input label="Name" placeholder="Enter a business name" value={name} onChangeText={setName} />
        <Button
          style={{ marginTop: 10 }}
          disabled={!(name.length >= 3)}
          appearance={loading ? 'outline' : 'filled'}
          accessoryLeft={loadingIndicator}
          onPress={saveBusiness}
        >
          {loading ? 'SAVING BUSINESS...' : 'SAVE BUSINESS'}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Business;
