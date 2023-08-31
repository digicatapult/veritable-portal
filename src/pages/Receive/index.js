import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { Grid } from '@digicatapult/ui-component-library'
import Spinner from '../../components/Spinner'
import QRReader from './QRReader'
import OPT from './OPT'
import { Button } from '../../components/shared'

const Content = styled('Grid')`
  padding: 20px 0px;
`

const Font = styled('div')`
  text-align: center;
  font-size: 20px;
  font-style: normal;
  padding: 0 10%;
  font-weight: 700;
  line-height: normal;
`

export default function Receive() {
  const [inputs, setInputs] = React.useState({})
  const [stage, setStage] = React.useState(1)
  // const [credential, setCredential] = React.useState(null)
  const [fetching, isFetching] = React.useState(false)
  const [verified, setVerified] = React.useState(false)
  const navigate = useNavigate()

  React.useEffect(() => {
    new Promise((r) => setTimeout(r, 1000)).then(() => {
      isFetching(false)
    })

    if (inputs.qr && inputs.opt) {
      return setVerified(true)
    }
  }, [inputs])

  const handleInputs = (data) => {
    isFetching(true)
    setInputs((prev) => ({
      ...prev,
      ...data,
    }))
    setStage((prev) => prev + 1)
  }

  const sharedProps = { setStage, inputs, handleInputs }

  if (fetching) return <Spinner />
  if (verified)
    return (
      <Grid
        alignItems="center"
        columns={['auto']}
        rows={['1fr', '1fr']}
        areas={[['title'], ['body']]}
      >
        <Grid.Panel area="title">
          <Font>
            {
              'Sam, you’ve been onboarded as a supplier for Polestar. Please find below for your certification pack for checks formed for your company.'
            }
          </Font>
        </Grid.Panel>
        <Grid.Panel justifySelf="center" area="body">
          <Button onClick={() => navigate('/credential')}>
            See Digital Certification
          </Button>
        </Grid.Panel>
      </Grid>
    )

  return (
    <Content>
      {stage === 0 && <QRReader {...sharedProps} />}
      {stage === 1 && <OPT {...sharedProps} />}
      {stage > 1 && <div>error</div>}
    </Content>
  )
}
