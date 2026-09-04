import { useSelector } from 'react-redux'
import type { Post as PostType } from './postsSlice'
import { selectUserById } from '../users/usersSlice'
import type { RootStore } from '../../app/store'

const Post = ({ post }: { post: PostType }) => {
	const author = useSelector((s: RootStore) => selectUserById(s, post.authorId))
	return (
		<article key={post.id}>
			<h2 style={{ marginBottom: 4 }}>{post.title}</h2>
			<p style={{ margin: 0 }}>{post.description}</p>
			<p>Author: {author?.displayName ?? 'None'}</p>
		</article>
	)
}

export default Post
