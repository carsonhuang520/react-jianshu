import { fromJS } from 'immutable'
import { constants } from './index'

const defaultState = fromJS({
  login: false,
})

const reducer = (state = defaultState, action) => {
  if (action.type === constants.LOGIN) {
    return state.set('login', action.value)
  }
  if (action.type === constants.LOGOUT) {
    return state.set('login', action.value)
  }
  return state
}

export default reducer
