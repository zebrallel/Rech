import './index.css'
import * as React from 'react'
import ReactDOM from 'react-dom'
import routesConfig from './route'

class App extends React.PureComponent {
  constructor() {
    super()

    const url = new URL(location.href)
    const match = routesConfig.find(config => config.path === url.pathname)

    this.state = {
      current: match,
      routes: routesConfig
    }
  }
  onItemClick = route => {
    this.setState({
      current: route
    })
    history.pushState(
      {
        path: route.path
      },
      '',
      route.path
    )
  }
  onHomeClick = () => {
    this.setState({
      current: null
    })
    history.replaceState(null, '', '/')
  }
  onPopState = eve => {
    if (!eve.state) {
      this.setState({
        current: null
      })
    } else {
      this.setState({
        current: routesConfig.find(config => config.path === eve.state.path)
      })
    }
  }
  componentDidMount() {
    window.addEventListener('popstate', this.onPopState, false)
  }
  render() {
    const { current, routes } = this.state

    if (!current) {
      return routes.map(route => {
        return (
          <div key={route.title} className="item" onClick={this.onItemClick.bind(this, route)}>
            {route.title}
          </div>
        )
      })
    } else {
      return (
        <>
          <div className="header">
            <button onClick={this.onHomeClick}>home</button>
          </div>
          <div className="content">
            <current.component />
          </div>
        </>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
