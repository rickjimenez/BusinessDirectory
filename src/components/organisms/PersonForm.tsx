import React, { FC, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Input, Text, Calendar, Button, Spinner } from '@ui-kitten/components';
import { TPerson } from '@customTypes/business';
import { Entypo } from '@expo/vector-icons';
import { useCreatePerson, useDeletePerson, useUpdatePerson } from '@hooks/persons';

interface Props {
  businessId: string;
  businessName: string;
  person?: TPerson;
}

/**
 * This component handle the CUD operations for the persons
 * @function PersonForm
 * @param {string} businessId
 * @param {string} businessName
 * @param {TPerson} person
 * @author Rich Jimenez <richjimenez@me.com>
 */
const PersonForm: FC<Props> = ({ businessId, businessName, person }): JSX.Element => {
  const [name, setName] = useState<string>(person?.name || '');
  const [role, setRole] = useState<string>(person?.role || '');
  const [email, setEmail] = useState<string>(person?.email || '');
  const [phone, setPhone] = useState<string>(person?.phone || '');
  const [date, setDate] = useState<Date>(person?.join_date ? new Date(person.join_date) : new Date());

  const { mutate, isLoading } = useCreatePerson();
  const { mutate: updatePersonMutate, isLoading: updateIsLoading } = useUpdatePerson();
  const { mutate: delePersonMutation, isLoading: deleteIsLoading } = useDeletePerson();

  const savePerson = (): void => {
    if (isLoading || updateIsLoading) return;
    if (person) {
      updatePersonMutate({
        businessId,
        personId: person.personId,
        name,
        role,
        email,
        phone,
        join_date: date.toLocaleDateString(),
      });
    } else {
      mutate({ businessId, name, role, email, phone, join_date: date.toLocaleDateString() });
    }
  };

  const deletePerson = (): void => {
    if (deleteIsLoading) return;
    if (person) {
      Alert.alert(
        'Delete Person ',
        'Are you sure you want to delete this person?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            onPress: () => {
              if (person?.personId) {
                delePersonMutation({ businessId, personId: person.personId });
              }
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  const deleteIcon = (): JSX.Element =>
    deleteIsLoading ? <Spinner size="small" /> : <Entypo name="trash" size={15} color="white" />;
  const saveIcon = (): JSX.Element =>
    updateIsLoading ? <Spinner size="small" /> : <Entypo name="save" size={15} color="white" />;

  const isValidForm = name.length > 0 && role.length > 0 && email.length > 0 && phone.length > 0;

  return (
    <>
      <Input label="Business" placeholder={businessName} style={styles.input} disabled />
      <Input label="Person Name" placeholder="John Doe" value={name} onChangeText={setName} style={styles.input} />
      <Input label="Role" placeholder="Admin" value={role} onChangeText={setRole} style={styles.input} />
      <Input label="Email" placeholder="john@doe.com" value={email} onChangeText={setEmail} style={styles.input} />
      <Input label="Phone" placeholder="999-999-9999" maxLength={10} value={phone} onChangeText={setPhone} style={styles.input} />
      <Text category="label" style={styles.textDate}>
        Selected date: {date.toLocaleDateString()}
      </Text>
      <Calendar date={date} onSelect={setDate} style={styles.calendar} />

      {person && (
        <Button
          status="danger"
          appearance={deleteIsLoading ? 'outline' : 'filled'}
          accessoryLeft={deleteIcon}
          onPress={deletePerson}
          style={styles.deleteBtn}
        >
          DELETE
        </Button>
      )}

      <Button
        disabled={!isValidForm}
        appearance={isLoading || updateIsLoading ? 'outline' : 'filled'}
        accessoryLeft={saveIcon}
        onPress={savePerson}
      >
        SAVE
      </Button>
    </>
  );
};

export default PersonForm;

const styles = StyleSheet.create({
  textDate: {
    color: '#8F9BB3',
  },
  input: {
    marginBottom: 10,
  },
  calendar: {
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 10,
  },
  deleteBtn: {
    marginBottom: 10,
  },
});
