import React from 'react'
import { Text } from 'native-base'

import { Content } from '../components'

export default class App extends React.Component {
  render() {
    // const { navigate } = this.props.navigation

    return (
      <Content>
        <Text>Podcast</Text>
      </Content>
    )
  }
}
