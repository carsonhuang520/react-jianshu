import React from 'react'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
} from './style.js'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

function Header(props) {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe634;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition timeout={250} in={props.focused} classNames="slide">
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleFocus}
              onBlur={props.handleBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>
            &#xe63d;
          </i>
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

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus: () => {
      dispatch(actionCreators.getFocusAction())
    },

    handleBlur: () => {
      dispatch(actionCreators.getBlurAction())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
