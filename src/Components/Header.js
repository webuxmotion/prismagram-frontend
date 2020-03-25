import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import useInput from '../Hooks/useInput'
import Input from './Input'
import { HeartEmpty, Compass, User } from './Icons'

const Header = styled.header `
  width: 100%;
  border: 0;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  background-color: white;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`

const HeaderColumn = styled.div`
  width: 33.33333%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`

const SearchInput = styled(Input)`
  padding: 5px;
  height: auto;
  font-size: 14px;
  text-align: center;

  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`

const HeaderLogoImg = styled.img`
  display: block;
`

export default () => {
  const search = useInput("")

  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">
            <HeaderLogoImg src="/logo.png" alt="logo" />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <SearchInput placeholder="Search" {...search} />
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/explore">
            <Compass />
          </HeaderLink>
          <HeaderLink to="/notifications">
            <HeartEmpty />
          </HeaderLink>
          <HeaderLink to="/username">
            <User />
          </HeaderLink>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  )
}