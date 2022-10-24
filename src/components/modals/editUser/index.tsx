/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TextInputProps,
} from 'react-native';

interface IModalProps extends TextInputProps {
  onOpenAndClosedModal: () => void;
  visibleModal: boolean;
  titleModal: string;
  name?: string;
}

export const EditUser = ({
  visibleModal,
  onOpenAndClosedModal,
  titleModal,
  name,
  ...res
}: IModalProps) => {
  return (
    <>
      {visibleModal && (
        <View style={styles.container}>
          <View style={styles.closed}>
            <TouchableOpacity onPress={onOpenAndClosedModal} testID={'closed'}>
              <Text>❌</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>{titleModal}</Text>
          <TextInput
            {...res}
            style={styles.input}
            placeholder="Digite nome"
            placeholderTextColor={'#000'}
            value={name}
          />

          <View style={styles.wrapper}>
            <TouchableOpacity
              onPress={onOpenAndClosedModal}
              style={styles.button}>
              <Text style={styles.titleButton}>Fechar modal</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onOpenAndClosedModal}
              style={styles.buttonSave}>
              <Text style={styles.titleButton}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  closed: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  input: {
    width: '100%',
    height: 45,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#cdcdcd',
    paddingLeft: 16,
    color: '#000',
  },
  title: {
    color: '#000',
    fontWeight: '600',
    marginBottom: 30,
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  titleButton: {
    color: '#fff',
    fontWeight: '600',
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonSave: {
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
