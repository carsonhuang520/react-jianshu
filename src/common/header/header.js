import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoItem,
  SearchInfoSwitch,
  SearchInfoList,
} from './style.js'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'

class Header extends Component {
  getArea() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props
    const newList = list.toJS()
    const items = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        items.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                handleChangePage(page, totalPage, this.spinIcon)
              }}
            >
              <i
                ref={(icon) => {
                  this.spinIcon = icon
                }}
                className="iconfont spin"
              >
                &#xe64e;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{items}</SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleFocus, handleBlur, list, login, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ? (
            <NavItem className="right" onClick={logout}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <i className="iconfont">&#xe634;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={250} in={focused} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => {
                  handleFocus(list)
                }}
                onBlur={handleBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe63d;
            </i>
            {this.getArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe6a6;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus: (list) => {
      list.size === 0 && dispatch(actionCreators.getHeaderListAction())
      dispatch(actionCreators.getFocusAction())
    },

    handleBlur: () => {
      dispatch(actionCreators.getBlurAction())
    },
    handleMouseEnter: () => {
      dispatch(actionCreators.mouseEnterAction())
    },
    handleMouseLeave: () => {
      dispatch(actionCreators.mouseLeaveAction())
    },
    handleChangePage: (page, totalPage, icon) => {
      let originRotate = icon.style.transform.replace(/[^0-9]/gi, '')
      if (originRotate) {
        originRotate = parseInt(originRotate)
      } else {
        originRotate = 0
      }
      icon.style.transform = 'rotate(' + (originRotate + 360) + 'deg)'
      if (page < totalPage) {
        dispatch(actionCreators.changePageAction(page + 1))
      } else {
        dispatch(actionCreators.changePageAction(1))
      }
    },
    logout: () => {
      dispatch(loginActionCreators.logout(false))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
