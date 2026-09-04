import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit'
import type { RootStore } from '../../app/store'

export type Post = {
	id: string
	title: string
	description: string
	authorId?: string
}

const initialState: Post[] = [
	{
		id: '1',
		title: 'Hey Hey',
		description: 'Yo whats up...',
	},
	{
		id: '2',
		title: 'Hello from Mars',
		description: 'Check out this view from Mars!',
	},
]

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		createPost: {
			reducer: (state: Post[], action: PayloadAction<Post>) => {
				state.push(action.payload)
			},
			prepare: (title: string, description: string, authorId: string) => {
				return {
					payload: {
						id: nanoid(),
						title,
						description,
						authorId,
					},
				}
			},
		},
	},
})

export const selectAllPosts = (state: RootStore) => state.posts

export const { createPost } = postsSlice.actions

export default postsSlice.reducer
