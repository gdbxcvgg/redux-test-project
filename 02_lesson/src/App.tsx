import { Provider } from 'react-redux'
import { store } from './app/store'
import PostsList from './features/posts/PostsList'
import PostForm from './features/posts/PostForm'

function App() {
	return (
		<Provider store={store}>
			<PostForm />
			<PostsList />
		</Provider>
	)
}

export default App
