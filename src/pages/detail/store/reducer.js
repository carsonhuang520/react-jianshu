import { fromJS } from 'immutable'
import { constants } from './index'

const defaultState = fromJS({
  title: '',
  content: '',
})

const reducer = (state = defaultState, action) => {
  if (action.type === constants.INIT_DETAIL) {
    return state.merge({
      title: action.title,
      content: action.content,
    })
  }
  return state
}

export default reducer
