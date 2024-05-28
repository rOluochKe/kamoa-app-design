import React from 'react';
import { View, StyleSheet } from 'react-native';

const withPadding = (Component: React.ComponentType) => (props: any) => (
  <View style={styles.container}>
    <Component {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});

export default withPadding;
