import React from 'react'
import styled from 'styled-components'
import { Grid, AppBar } from '@digicatapult/ui-component-library'

const FullScreenGrid = styled(Grid)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

const HomeBar = styled.picture`
  height: 100%;
  margin-left: 20px;
`

export default function Home() {
  return (
    <FullScreenGrid
      areas={[
        ['home', 'header'],
        ['body', 'main'],
      ]}
      columns={['minmax(min-content, 1fr)', '3fr']}
      rows={['80px', 'min-content', 'min-content', 'minmax(0, 1fr)']}
    >
      <Grid.Panel area="home">
        <HomeBar>
          <h1>logo placeholder</h1>
        </HomeBar>
      </Grid.Panel>
      <Grid.Panel area="header">
        <AppBar
          shadow={false}
          theme={{
            primary: '#27847A',
            accent: '#FFF',
          }}
        >
          <AppBar.Item active={true}>MENU OPTION 1</AppBar.Item>
        </AppBar>
      </Grid.Panel>
      <Grid.Panel area="body">
        <h1>body placeholder</h1>
      </Grid.Panel>
      <Grid.Panel area="main" style={{ position: 'relative' }}></Grid.Panel>
    </FullScreenGrid>
  )
}
