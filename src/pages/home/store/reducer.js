import { fromJS } from 'immutable'
import { constants } from './index'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  showScroll: false,
})

const reducer = (state = defaultState, action) => {
  if (action.type === constants.INIT_HOME_DATA) {
    return state.merge({
      topicList: fromJS(action.topicList),
      articleList: fromJS(action.articleList),
      recommendList: fromJS(action.recommendList),
    })
  }
  if (action.type === constants.LOAD_MORE_LIST) {
    return state.merge({
      articleList: state.get('articleList').concat(fromJS(action.list)),
    })
  }
  if (action.type === constants.TOGGLE_SCROLL_TOP) {
    return state.set('showScroll', action.flag)
  }
  return state
}

export default reducer
