import Header from './common/header/header'
import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  )
}

export default App
