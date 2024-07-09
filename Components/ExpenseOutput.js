import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpenseList from './ExpenseList'
import { GlobalStylesForApp } from '../Styles/GlobalStyles';

export default function ExpenseOutput({periodTime,expenses}) {

    const DUMMY_EXPENSES =[
      {
        id: 'e1',
        description: 'Running Shoes',
        amount: 59.99,
        date: new Date('2021-12-19'),
      },
      {
        id: 'e2',
        description: 'Sunglasses',
        amount: 19.99,
        date: new Date('2020-05-23'),
      },
      {
        id: 'e3',
        description: 'House Keys',
        amount: 5.99,
        date: new Date('2018-11-10'),
      },
      {
        id: 'e4',
        description: 'Novel Books',
        amount: 9.99,
        date: new Date('2023-02-01'),
      },
      {
        id: 'e5',
        description: 'Dinner Forks',
        amount: 9.99,
        date: new Date('2024-09-19'),
      },
      {
        id: 'e6',
        description: 'Kitchen Forks',
        amount: 9.99,
        date: new Date('2024-09-19'),
      },
      {
        id: 'e7',
        description: 'Salad Forks',
        amount: 9.99,
        date: new Date('2024-09-19'),
      },
      {
        id: 'e8',
        description: 'Dessert Forks',
        amount: 9.99,
        date: new Date('2024-09-19'),
      },
      {
        id: 'e9',
        description: 'Silver Forks',
        amount: 9.99,
        date: new Date('2024-09-19'),
      },
      {
        id: 'e10',
        description: 'Plastic Forks',
        amount: 9.99,
        date: new Date('2024-09-19'),
      }
    ];


  return (
    <View>
      <ExpenseSummary periodTime={periodTime} expenses={DUMMY_EXPENSES}/>
      <ExpenseList  expenses={DUMMY_EXPENSES}/>
    </View>
  )
}

const styles = StyleSheet.create({
   
})