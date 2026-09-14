// add imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import {
	useCreateTodoMutation,
	useGetTodosQuery,
	useUpdateTodoMutation,
} from './api/apiSlice'

const TodoList = () => {
	const [newTodo, setNewTodo] = useState('')

	const {
		data: todos,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetTodosQuery()

	const [createTodo] = useCreateTodoMutation()
	const [updateTodo] = useUpdateTodoMutation()

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()

		createTodo({ userId: 1, title: newTodo, completed: false })

		setNewTodo('')
	}

	const newItemSection = (
		<form onSubmit={handleSubmit}>
			<label htmlFor="new-todo">Enter a new todo item</label>
			<div className="new-todo">
				<input
					type="text"
					id="new-todo"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					placeholder="Enter new todo"
				/>
			</div>
			<button className="submit">
				<FontAwesomeIcon icon={faUpload} />
			</button>
		</form>
	)

	let content

	if (isLoading) content = <p>Loading...</p>
	if (isSuccess)
		content = todos.map((todo) => (
			<article key={todo.id}>
				<div className="todo">
					<input
						type="checkbox"
						checked={todo.completed}
						onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
					/>
					<p>{todo.title}</p>
				</div>
				<button className="trash" onClick={() => null}>
					<FontAwesomeIcon icon={faTrash} />
				</button>
			</article>
		))
	if (isError) content = <p>{JSON.stringify(error)}</p>

	return (
		<main>
			<h1>Todo List</h1>
			{newItemSection}
			{content}
		</main>
	)
}
export default TodoList
