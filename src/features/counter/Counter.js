import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './counterSlice'
import styles from './Counter.module.css'

export const Counter = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <span className={styles.value}>{count}</span>

        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
