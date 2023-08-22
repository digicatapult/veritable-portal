import React from 'react'
import styled from 'styled-components'
import { RouterProvider } from 'react-router-dom'

import { router } from '../utils/Router'
import { Grid /*, AppBar */ } from '@digicatapult/ui-component-library'

const FullScreenGrid = styled(Grid)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

const PageTitle = styled('div')`
  color: #000;
  text-align: center;
  font-family: Roboto Mono;
  font-size: 12px;
  line-height: 35px;
  font-style: normal;
  font-weight: 700;
`

export default function App() {
  // const location = window.location.pathname

  return (
    <FullScreenGrid
      areas={[['header'], ['main']]}
      columns={['minmax(0, 1fr)']}
      rows={['35px', 'minmax(1fr, 3fr)']}
    >
      <Grid.Panel area="header">
        <PageTitle>- VERITABLE -</PageTitle>
        {/*<AppBar
          shadow={false}
          theme={{
            primary: '#000',
            accent: '#FFF',
          }}
        >
          <AppBar.Item active={location === '/home'} href="/home">
            HOME
          </AppBar.Item>
          <AppBar.Item active={location === '/issue'} href="/issue">
            ISSUE CREDENTIAL
          </AppBar.Item>
        </AppBar>*/}
      </Grid.Panel>
      <Grid.Panel justifySelf="center" area="main">
        <RouterProvider router={router} />
      </Grid.Panel>
    </FullScreenGrid>
  )
}
