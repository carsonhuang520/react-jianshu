import Loadable from 'react-loadable'
import React from 'react'

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return <div>加载中</div>
  },
})

const App = () => <LoadableComponent />

export default App
