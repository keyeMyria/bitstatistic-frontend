import React from 'react';

import {
  View,
  Image,
  Text,
} from 'react-native';

import { styles } from './style';

export default ({ title }) => (
  <View>
    <View style={styles.header}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/merix_logo_text.png')}
        />
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
      <Image source={require('../../../assets/images/header_arrows.png')} />
    </View>
    <View style={styles.border} />
  </View>
);
