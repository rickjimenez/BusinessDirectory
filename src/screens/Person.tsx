import React, { FC } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { AddPersonScreenProps } from '@customTypes/navigation';
import PersonForm from '@components/organisms/PersonForm';
import { globalStyles } from '@styles/globalStyles';

/**
 * This screen is used to the CUD actions for a person.
 * @function PersonScreen
 * @author Rich Jimenez <richjimenez@me.com>
 */
const Person: FC<AddPersonScreenProps> = ({ route }): JSX.Element => {
  const { businessId, businessName, person } = route.params;

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView>
        <View style={globalStyles.wrapper}>
          <PersonForm businessId={businessId} businessName={businessName} person={person} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Person;
