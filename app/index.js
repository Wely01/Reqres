import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../assets/Style';

const Stack = createStackNavigator();

const UsersList = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Erro ao buscar os dados');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { userId: item.id })}>
            <View style={styles.card}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <Text style={styles.name}>{item.first_name} {item.last_name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const UserDetails = ({ route }) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Erro ao buscar os detalhes');
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      {user && (
        <View style={styles.detailCard}>
          <Image source={{ uri: user.avatar }} style={styles.largeAvatar} />
          <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      )}
    </View>
  );
};

const UsersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Usuários" component={UsersList} />
      <Stack.Screen name="Detalhes" component={UserDetails} />
    </Stack.Navigator>
  );
};



export default UsersStack;
