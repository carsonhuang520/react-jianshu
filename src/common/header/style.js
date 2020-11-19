import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/',
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 80px;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  font-size: 17px;
  &.left {
    float: left;
    &:hover {
      background: #f5f5f5;
    }
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  &:hover {
    cursor: pointer;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont {
    color: #969696;
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      color: #fff;
      background: #999;
    }
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 20px;
  width: 240px;
  padding: 0 20px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  color: #969696;
  font-size: 14px;
`

export const SearchInfoSwitch = styled.span`
  font-size: 13px;
  float: right;
  cursor: pointer;
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  float: left;
  font-size: 12px;
  line-height: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 0 5px;
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索',
})`
  height: 38px;
  width: 160px;
  padding: 0 40px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  box-sizing: border-box;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.25s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.25s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  height: 38px;
  line-height: 38px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 24px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
  &.reg {
    color: #ec6149;
    &:hover {
      background: rgba(236, 97, 73, 0.05);
    }
  }
  &.writting {
    color: #fff;
    background: #ea6f5a;
    .iconfont {
      margin-right: 4px;
    }
    &:hover {
      background: #ec6149;
    }
  }
`
