import React from 'react'
import styled from 'styled-components'
import { Grid, AppBar } from '@digicatapult/ui-component-library'

const FullScreenGrid = styled(Grid)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

export default function Home() {
  return (
    <FullScreenGrid
      areas={[
        ['header'],
        ['main'],
      ]}
      columns={['minmax(0, 1fr)']}
      rows={['80px', 'min-content' /*, 'min-content', 'minmax(0, 1fr)' */ ]}
    >
      <Grid.Panel area="header">
        <AppBar
          shadow={false}
          theme={{
            primary: '#000',
            accent: '#FFF',
          }}
        >
          <AppBar.Item active={true}>MENU OPTION 1</AppBar.Item>
        </AppBar>
      </Grid.Panel>
      <Grid.Panel area="main">
        <h1>body placeholder</h1>
      </Grid.Panel>
      <Grid.Panel area="main" style={{ position: 'relative' }}></Grid.Panel>
    </FullScreenGrid>
  )
}
