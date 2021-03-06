/* @flow */
import React from 'react';
import { StyleSheet } from 'react-native'
import { Content, Grid, Col } from 'native-base'

import { $colorLight } from '../variables'

type Props = {
  title: string,
};

const AppContent = ({ children }: Props) => (
  <Content style={styles.content}>
    <Grid>
      <Col style={styles.main}>{children}</Col>
    </Grid>
  </Content>
);

const styles = StyleSheet.create({
  content: {
    backgroundColor: $colorLight,
  },
  main: {
    paddingHorizontal: 16,
    paddingTop: 8,
  }
})

export default AppContent
