import { fromJS } from 'immutable'
import { constants } from './index'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
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
  return state
}

export default reducer
