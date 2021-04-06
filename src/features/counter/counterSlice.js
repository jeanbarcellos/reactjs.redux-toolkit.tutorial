import { createSlice } from '@reduxjs/toolkit'

export const counterSlide = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // O Redux Toolkit nos permite escrever lógica "mutante" em redutores.
      // Na verdade, ele não altera o estado porque usa a biblioteca Immer,
      // que detecta mudanças para um "estado de rascunho" e produz um novo estado
      // imutável baseado nessas mudanças
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlide.actions

export default counterSlide.reducer
