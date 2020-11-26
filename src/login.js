import React from 'react';
import {Layout, Input, Button} from '@ui-kitten/components';
import styles from './styles/loginStyle';

const login = ({navigation}) => {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');

  return (
    <Layout style={styles.container} level="2">
      <Input
        style={styles.input}
        placeholder="username"
        value={user}
        label={'username'}
        onChangeText={(nextValue) => setUser(nextValue)}
      />
      <Input
        style={styles.input}
        placeholder="password"
        value={pass}
        label={'password'}
        secureTextEntry={true}
        onChangeText={(nextValue) => setPass(nextValue)}
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Dashboard')}
      >
        {'Sign In'}
      </Button>
    </Layout>
  );
};

export default login;
