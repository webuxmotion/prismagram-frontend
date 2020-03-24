import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'
import styled, { ThemeProvider } from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from '../Styles/GlobalStyles'
import Theme from '../Styles/Theme'
import Router from './Router'
import Footer from './Footer'
import Header from './Header'


const QUERY = gql`
  {
    isLoggedIn @client
  }
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`

export default () => {
  const { data : { isLoggedIn } } = useQuery(QUERY)
  
  return (
    <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <Router isLoggedIn={isLoggedIn} />
        <Footer />
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </Wrapper>
    </>
    </ThemeProvider>
  )
}
