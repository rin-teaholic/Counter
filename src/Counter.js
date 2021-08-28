import React from 'react'
import { Button, Typography } from '@material-ui/core'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  plus = () => {
    this.setState({count: this.state.count + 1})
  }

  minus = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div className="counter">
      <Typography
        align='center'
        variant='h2'
      >{ this.state.count }</Typography>
        <Typography align='center'>
        <Button
            onClick={this.plus}
            color="primary"
            variant="outlined"
            type="button" >
            INCREASE
          </Button>
          <Button
            onClick={this.minus}
            color="secondary"
            variant="outlined"
            type="button" className="btn">
            DECREASE
          </Button>
          </Typography>
        </div>
    )
  }
}

export default Counter