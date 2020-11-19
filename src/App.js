import Header from './common/header/header'
import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
