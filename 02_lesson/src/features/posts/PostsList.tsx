import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import Post from './Post'

const PostsList = () => {
	const posts = useSelector(selectAllPosts)

	return (
		<>
			{posts.map((post) => (
				<Post post={post} />
			))}
		</>
	)
}

export default PostsList
