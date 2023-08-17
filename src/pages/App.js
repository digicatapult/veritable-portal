import React from 'react'
import styled from 'styled-components'
import { RouterProvider } from 'react-router-dom'

import { router } from '../utils/Router'
import { Grid, AppBar } from '@digicatapult/ui-component-library'

const FullScreenGrid = styled(Grid)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

export default function App() {
  const location = window.location.pathname

  return (
    <FullScreenGrid
      areas={[['header'], ['main']]}
      columns={['minmax(0, 1fr)']}
      rows={['80px', 'minmax(0, 1fr)']}
    >
      <Grid.Panel area="header">
        <AppBar
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
        </AppBar>
      </Grid.Panel>
      <Grid.Panel justifySelf="center" area="main">
        <RouterProvider router={router} />
      </Grid.Panel>
    </FullScreenGrid>
  )
}
