import React from 'react'
import { Text } from 'native-base'
import { withNavigation } from 'react-navigation'

import { Content } from '../components'

class Home extends React.Component {
  render() {
    return (
      <Content>
        <Text>Home</Text>
      </Content>
    )
  }
}

export default withNavigation(Home)
