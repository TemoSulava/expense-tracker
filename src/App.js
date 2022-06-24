import React from 'react'

import {Grid} from '@material-ui/core'

import Details from './components/Details/Details.jsx'
import Main from './components/Main/Main.jsx'

import useStyles from './styles'

const App = () => {

  const classes = useStyles()

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        aligntItems='center'
        justifyContent='center'
        style={{ height: '100vh' }}>
        <Grid className={classes.mobile} item xs={12} sm={4}>
          <Details title='Income' />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid className={classes.desktop} item xs={12} sm={4}>
          <Details title='Income' />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title='Expense' />
        </Grid>
      </Grid>
    </div>
  )
}

export default App