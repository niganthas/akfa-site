import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import getTransitionStyle from "../utils/getTransitionStyle";

const duration = 250

const defaultStyle = {
    entering: {
        opacity:0, transition: `all ${duration}ms ease-in-out`
    },
    entered: {
        opacity:1, transition: `all ${duration}ms ease-in-out`
    },
    exited: {
        opacity:0, transition: `all ${duration}ms ease-in-out`
    },
}


export default (Component, transitionStyle) =>
  class Transitor extends React.Component {
    constructor(props) {
      super(props)
        this.transitionStyle = transitionStyle || defaultStyle
    }

    state = {
        event: false
    }

    eventHandler() {
        this.setState({
            event: !this.state.event
        });
    }

    render() {
      return (
        <Transition in={this.state.event} timeout={duration}>
          {state => (
              <Component change={this.eventHandler.bind(this)} transitionStyle={this.transitionStyle[state]}/>
          )}
        </Transition>
      )
    }
  }
