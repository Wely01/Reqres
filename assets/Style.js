import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      backgroundColor: 'black',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    error: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 18,
      color: 'red',
    },
    card: {
      backgroundColor: '#778899',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      alignItems: 'center',
    },
    detailCard: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    avatar: {
      width: 70,
      height: 70,
      borderRadius: 25,
      marginRight: 10,
    },
    largeAvatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    email: {
      fontSize: 16,
      color: '#FFFFFF',
    },
  });

  export default styles;