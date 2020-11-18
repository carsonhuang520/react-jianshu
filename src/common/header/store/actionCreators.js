import * as constants from './constants'

export const getFocusAction = () => {
  return {
    type: constants.SEARCH_FOCUS,
  }
}

export const getBlurAction = () => {
  return {
    type: constants.SEARCH_BLUR,
  }
}
