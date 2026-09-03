import { Provider } from 'react-redux'
import { store } from './app/store'
import PostsList from './features/posts/PostsList'

function App() {
	return (
		<Provider store={store}>
			<PostsList />
		</Provider>
	)
}

export default App
