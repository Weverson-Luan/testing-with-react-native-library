/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * IMPORT
 */
import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useQuery, useMutation, useQueryClient} from 'react-query';
import {StarRating} from '../../components/starRating';
import {EditUser as EditUserModal} from '../../components/modals/editUser';
import {api} from '../../services/api';
import {Loading} from '../../components/loading';

// 1* UseQuery -> usado sempre que formos buscar algo em nossa api.

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [name, setName] = useState<string>('');
  const [useId, setUserId] = useState<string>('');

  const queryClient = useQueryClient();

  const {data} = useQuery('user-all', api.getUsers);

  const {mutate, isLoading} = useMutation(
    () => api.updateUserName(useId, name),
    {
      onSuccess: () => {
        setIsOpenModal(!isOpenModal);
        queryClient.invalidateQueries('user-all');
      },
    },
  );

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de usuários</Text>
      </View>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <EditUserModal
          titleModal='Atualizar Usuário'
            visibleModal={isOpenModal}
            onOpenAndClosedModal={() => {
              mutate();
            }}
            onChangeText={text => setName(text)}
          />
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <StarRating
                name={item.name}
                star={item.star}
                image={item.avatar}
                onEdit={() => {
                  setUserId(item.id);
                  setIsOpenModal(!isOpenModal);
                }}
              />
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 18,
    marginTop: 8,
  },
});
/**
 * EXPORTS
 */
export {Home};
