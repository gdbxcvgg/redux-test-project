import { useSelector } from 'react-redux'
import type { RootStore } from '../../app/store'

const PostsList = () => {
	const posts = useSelector((state: RootStore) => state.posts)

	return (
		<>
			{posts.map((post) => (
				<article key={post.id}>
					<h2 style={{ marginBottom: 4 }}>{post.title}</h2>
					<p style={{ margin: 0 }}>{post.description}</p>
				</article>
			))}
		</>
	)
}

export default PostsList
