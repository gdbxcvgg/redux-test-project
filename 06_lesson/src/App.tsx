import { ApiProvider } from '@reduxjs/toolkit/query/react'
import TodoList from './features/todos/TodoList'
import { apiSlice } from './features/todos/api/apiSlice'

function App() {
	return (
		<ApiProvider api={apiSlice}>
			<TodoList />
		</ApiProvider>
	)
}

export default App
