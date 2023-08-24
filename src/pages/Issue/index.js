import React from 'react'
import styled from 'styled-components'

import Spinner from '../../components/Spinner'
import ChecksForm from './ChecksForm'
import CompanyDetailsForm from './CompanyDetailsForm'
import Summary from './Summary'

const Content = styled('Grid')`
  padding: 20px 0px;
`

export default function Issue() {
  const [inputs, setInputs] = React.useState({})
  const [stage, setStage] = React.useState(0)
  const [fetching, isFetching] = React.useState(false)

  React.useEffect(() => {
    new Promise((r) => setTimeout(r, 1000)).then(() => {
      isFetching(false)
    })
  }, [inputs])

  const handleSubmit = (e, isFinal = false) => {
    e.preventDefault()
    isFetching(true)

    if (isFinal) return setInputs({})

    const { checks, ...data } = Object.fromEntries(new FormData(e.target))

    setInputs((prev) => ({
      ...prev,
      ...data,
      checks: checks ? JSON.parse(checks) : undefined,
    }))
    setStage((prev) => prev + 1)
  }

  const sharedProps = { setStage, inputs, handleSubmit }
  if (fetching) return <Spinner />

  return (
    <Content>
      {stage === 0 && <CompanyDetailsForm {...sharedProps} />}
      {stage === 1 && <ChecksForm {...sharedProps} />}
      {stage === 2 && <Summary {...sharedProps} />}
    </Content>
  )
}
