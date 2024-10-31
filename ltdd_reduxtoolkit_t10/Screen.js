import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs, addItemRequest, deleteItemRequest } from './jobSlice';

const Screen2 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);

  const user = {
    name: 'Nguyen Duc An',
    email: 'b.tran@gmail.com',
    phone: '09876543321',
  };

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleAddItem = async (item) => {
    await dispatch(addItemRequest(item));
    dispatch(fetchJobs());
  };

  const handleDeleteItem = async (id) => {
    if (id) {
      await dispatch(deleteItemRequest(id));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name='arrow-back' size={24} />
        <View style={styles.userNameBox}>
          <View style={{ borderRadius: 100, backgroundColor: 'red', borderWidth: 2, width: 35, height: 40 }}></View>
          <View style={styles.userNameAndGreet}>
            <Text style={styles.userName}>Hi, {user.name}</Text>
            <Text style={styles.greeting}>Have a great day ahead</Text>
          </View>
        </View>
      </View>
      <View style={styles.searchBox}>
        <TextInput style={styles.textInput} placeholder='Search' />
      </View>
      <View style={styles.listContainer}>
        {jobs.map((item) => (
          <View key={item.id} style={styles.listItem}>
            <View style={styles.group1}>
              <Icon name="check" size={16} color="green" />
              <Text style={styles.listTitle}>{item.job}</Text>
            </View>
            <View style={styles.groupButton}>
              <TouchableOpacity onPress={() => handleAddItem(item)}>
                <Icon name="add" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
                <Icon name="delete" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Screen3')}>
          <Icon name="add" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    paddingHorizontal: 12,
    marginTop: 20,
    width: '100%',
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginBottom: 20,
  },
  userNameBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    height: '100%',
  },
  userNameAndGreet: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    width: '80%',
    height: '100%'
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  greeting: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textInput: {
    width: '100%',
    height: '100%',
    color: 'gray',
    outline: 'none'
  },
  listContainer: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 10,
    marginBottom: 12,
    backgroundColor: 'rgba(144, 149, 160, 1)'
  },
  listTitle: {
    fontSize: 16,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '700',
    marginLeft: 10,
  },
  group1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '70%',
    height: '100%'
  },
  groupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  addButton: {
    backgroundColor: 'rgba(0, 189, 214, 1)',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default Screen2;
