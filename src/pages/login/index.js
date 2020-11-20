import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'

class Login extends PureComponent {
  render() {
    if (!this.props.loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={(input) => {
                this.account = input
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              ref={(input) => {
                this.password = input
              }}
            />
            <Button
              onClick={() => this.props.login(this.account, this.password)}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapState = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login']),
  }
}

const mapDispatch = (dispatch) => {
  return {
    login(account, password) {
      dispatch(actionCreators.login(account.value, password.value))
    },
  }
}

export default connect(mapState, mapDispatch)(Login)
