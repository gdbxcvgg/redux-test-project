import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Todo = {
	userId: number
	id?: number
	title: string
	completed: boolean
}

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3500' }),
	tagTypes: ['Todos'],
	endpoints: (builder) => ({
		getTodos: builder.query<Todo[], void>({
			query: () => '/todos',
			providesTags: ['Todos'],
			transformResponse: (res: Todo[]) =>
				res.sort((a, b) => (b.id ?? 0) - (a.id ?? 0)),
		}),

		createTodo: builder.mutation<Todo, Todo>({
			query: (todo) => ({
				url: '/todos',
				method: 'POST',
				body: todo,
			}),
			invalidatesTags: ['Todos'],
		}),

		updateTodo: builder.mutation<Todo, Todo>({
			query: (todo) => ({
				url: `/todos/${todo.id}`,
				method: 'PATCH',
				body: todo,
			}),
			invalidatesTags: ['Todos'],
		}),
	}),
})

export const {
	useGetTodosQuery,
	useCreateTodoMutation,
	useUpdateTodoMutation,
} = apiSlice
