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

  const handleSubmit = (e) => {
    e.preventDefault()
    isFetching(true)

    const data = Object.fromEntries(new FormData(e.target))

    setInputs((prev) => ({
      ...prev,
      ...data,
      checks: data.checks ? JSON.parse(data.checks) : undefined,
    }))
    setStage((prev) => prev + 1)
  }

  if (fetching) return <Spinner />

  return (
    <Content>
      {stage === 0 && (
        <CompanyDetailsForm inputs={inputs} handleSubmit={handleSubmit} />
      )}
      {stage === 1 && (
        <ChecksForm
          setStage={setStage}
          inputs={inputs}
          handleSubmit={handleSubmit}
        />
      )}
      {stage === 2 && (
        <Summary
          setStage={setStage}
          inputs={inputs}
          handleSubmit={handleSubmit}
        />
      )}
    </Content>
  )
}
