import React from 'react'
import styled from 'styled-components'
import { QRReader, Grid } from '@digicatapult/ui-component-library'

const Body = styled('div')`
  border-radius: 2px;
  border: 1px solid var(--black, #000);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 86px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`

export default function Scanner({ handleInputs }) {
  return (
    <Grid
      alignItems="start"
      rows={['3fr', '1fr']}
      columns={['minmax(0, 1fr)']}
      areas={[['camera'], ['body']]}
    >
      <Grid.Panel
        justifySelf={'center'}
        style={{ width: '80%' }}
        area={'camera'}
      >
        <QRReader
          viewFinderColor="#fff"
          viewFinderVariant="viewfinder-cross-med"
          onResult={(qr) => handleInputs({ qr })}
        />
      </Grid.Panel>
      <Grid.Panel justifySelf={'center'} style={{ width: '80%' }} area={'body'}>
        <Body>Frame QR Code with your camera</Body>
      </Grid.Panel>
    </Grid>
  )
}
