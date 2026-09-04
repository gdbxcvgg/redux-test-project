import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit'
import type { RootStore } from '../../app/store'

type User = {
	id: string
	username: string
	displayName: string
}

const initialState: User[] = [
	{
		id: '1',
		username: 'torvalds',
		displayName: 'Linus Torvalds',
	},
	{
		id: '2',
		username: 'tdavis',
		displayName: 'Terry Davis',
	},
]

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: {
			reducer: (state: User[], action: PayloadAction<User>) => {
				state.push(action.payload)
			},
			prepare: (username: string, displayName: string) => ({
				payload: {
					id: nanoid(),
					username,
					displayName,
				},
			}),
		},
	},
})

export const selectAllUsers = (state: RootStore) => state.users
export const selectUserById = (state: RootStore, id?: string) =>
	state.users.find((u) => u.id === id)

export const { addUser } = usersSlice.actions

export default usersSlice.reducer
