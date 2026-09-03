import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'

export const store = configureStore({
	reducer: { counter: counterSlice },
})

export type AppStore = typeof store
export type RootType = ReturnType<AppStore['getState']>
