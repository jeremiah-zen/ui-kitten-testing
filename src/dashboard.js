import React from 'react';
import {Layout, Spinner} from '@ui-kitten/components';
import styles from './styles/dashboardStyle';

const dashboard = () => (
  <Layout style={styles.container} level='2'>

    <Spinner size='tiny'/>

    <Spinner size='small'/>

    <Spinner size='medium'/>

    <Spinner size='large'/>

    <Spinner size='giant'/>

  </Layout>
);

export default dashboard;