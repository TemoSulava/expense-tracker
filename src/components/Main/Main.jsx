import React from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'

import useStyles from './styles'

const Main = () => {
    const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardHeader title='Expense Tracker' subheader='Developed By Temo Sulava' />
      <CardContent>
        <Typography type='center' variant='h5'>
          Total Balance $100
        </Typography>
        <Typography type='center' variant='subtitle1' style={{lineHeight: '1.5em', marginTop: '20px'}}>
            try saying: add income blabla
        </Typography>
        <Divider />
        {/*form*/}
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {/*List*/}
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main