import { useDispatch } from 'react-redux'
import { createPost } from './postsSlice'
import { useState } from 'react'

const PostForm = () => {
	const dispatch = useDispatch()

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(createPost(title, description))

		setTitle('')
		setDescription('')
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

			<input type="submit" value="Create Post" />
		</form>
	)
}

export default PostForm
