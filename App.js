import * as React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Container, Icon } from 'native-base'

import { Home, Podcast } from './screens'
import { $colorActive, $colorInactive } from './variables'

const routes = {
  Home: { screen: Home },
  Podcast: { screen: Podcast },
}

const icons = {
  Home: { name: 'home' },
  Podcast: { name: 'podcast', type: 'FontAwesome' },
}

const Stack = StackNavigator({
  screen: {
    screen: TabNavigator(routes, {
      initialRouteName: 'Home',
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state
          const icon = icons[routeName]

          return <Icon {...icon} active={focused} style={{ color: tintColor }} />
        },
      }),
      tabBarOptions: {
        activeTintColor: $colorActive,
        inactiveTintColor: $colorInactive,
      },
      animationEnabled: true,
      lazy: true,
    }),
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Stack />
      </Container>
    )
  }
}

