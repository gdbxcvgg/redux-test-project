import { useDispatch, useSelector } from 'react-redux'
import { createPost } from './postsSlice'
import { useState } from 'react'
import { selectAllUsers } from '../users/usersSlice'

const PostForm = () => {
	const dispatch = useDispatch()

	const users = useSelector(selectAllUsers)

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [userId, setUserId] = useState('')

	const isPostValid = !!userId && !!title && !!description

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(createPost(title, description, userId))

		setTitle('')
		setDescription('')
		setUserId('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Title: </label>
				<input
					type="text"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="description">Description: </label>
				<input
					type="text"
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="author">Author:</label>
				<select onChange={(e) => setUserId(e.target.value)} value={userId}>
					<option value="">-</option>
					{users.map((user) => (
						<option value={user.id}>{user.displayName}</option>
					))}
				</select>
			</div>

			<input type="submit" value="Create Post" disabled={!isPostValid} />
		</form>
	)
}

export default PostForm
