import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{
		id: 1,
		title: 'Hey Hey',
		description: 'Yo whats up...',
	},
	{
		id: 2,
		title: 'Hello from Mars',
		description: 'Check out this view from Mars!',
	},
]

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		createPost: (state, action) => {
			state.push({
				id: action.payload.id,
				title: action.payload.title,
				description: action.payload.description,
			})
		},
	},
})

export const { createPost } = postsSlice.actions

export default postsSlice.reducer
