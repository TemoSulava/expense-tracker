import React, { useState, useContext } from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { v4 as uuiidv4} from 'uuid'

import { ExpenseTrackerContext } from '../../../context/context'
import formatDate from '../../../utils/formatDate'


import useStyles from './styles'
import {incomeCategories, expenseCategories} from '../../../constants/categories'

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date())
}

const Form = () => {
  const classes = useStyles()

  const [formData, setFormData] = useState(initialState)
  const {addTransaction} = useContext(ExpenseTrackerContext)

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuiidv4()
    }
    addTransaction(transaction)
    setFormData(initialState)
  }

  const selectedCategories = formData.type === 'Income' ?  incomeCategories : expenseCategories

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle2' gutterBottom>
          Empty soon...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                type: e.target.value
              })
            }>
            <MenuItem value='Income'>Income</MenuItem>
            <MenuItem value='Expense'>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
              {selectedCategories.map(cat => <MenuItem key={cat.type} value={cat.type}>{cat.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type='number'
          label='Amount'
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type='date'
          label='Date'
          fullWidth
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })}
        />
      </Grid>
      <Button onClick={createTransaction} className={classes.button} variant='outlined' color='primary' fullWidth>
        Create
      </Button>
    </Grid>
  )
}

export default Form
