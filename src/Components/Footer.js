import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`

const List = styled.ul`
  display: flex;
`

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`

const Link = styled.a`
  color: ${props => props.theme.darkBlueColor};
`

const Copyright = styled.span`
  color: ${props => props.theme.darkGreyColor};
`

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="/about">About</Link>
      </ListItem>
      <ListItem>
        <Link href="/api">API</Link>
      </ListItem>
    </List>
    <Copyright>
      {new Date().getFullYear()} &copy; Instaclone
    </Copyright>
  </Footer>
)