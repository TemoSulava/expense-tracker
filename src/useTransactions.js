import { useContext } from 'react'
import { ExpenseTrackerContext } from './context/context'

import { incomeCategories, expenseCategories, resetCategories } from './constants/categories'

const useTransactions = (title) => {
  resetCategories()
  const { transactions } = useContext(ExpenseTrackerContext)
  const transactionsOfEachType = transactions.filter((tr) => tr.type === title)

  const total = transactionsOfEachType.reduce((acc, cur) => (acc += cur.amount), 0)
  const categories = title === 'Income' ? incomeCategories : expenseCategories


  transactionsOfEachType.forEach((tr) => {
    const category = categories.find((cat) => cat.type === tr.category)

    if (category) category.amount += tr.amount
  })

  const filteredOutCategories = categories.filter((cat) => cat.amount > 0)

  const chartData = {
    datasets: [
      {
        data: filteredOutCategories.map((cat) => cat.amount),
        backgroundColor: filteredOutCategories.map((cat) => cat.color)
      }
    ],
    labels: filteredOutCategories.map((cat) => cat.type)
  }

  return {filteredOutCategories, total, chartData}
}

export default useTransactions
