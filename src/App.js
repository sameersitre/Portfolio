import React, { Component } from 'react'
import { connect } from 'react-redux'
import Homepage from './pages/home'

export class App extends Component {
  render() {
    return (
      <div>
        <Homepage />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
