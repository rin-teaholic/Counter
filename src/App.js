import React from 'react'
import Counter from '../src/Counter'
import { Typography } from '@material-ui/core'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Typography
          align='center'
          color='primary'
          variant=	'h1'
        >
          COUNTER
        </Typography>
          <Counter />
      </React.Fragment>
    )
  }
}

export default App