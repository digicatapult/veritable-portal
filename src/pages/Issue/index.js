import React from 'react'
import styled from 'styled-components'
import Spinner from '../../components/Spinner'
import ChecksForm from './ChecksForm'
import CompanyDetailsForm from './CompanyDetailsForm'

export const checks = [
  {
    value: 'check-1',
    label: 'temporary check 1',
  },
  {
    value: 'check-2',
    label: 'temporary check 2',
  },
  {
    value: 'check-3',
    label: 'temporary check 3',
  },
  {
    value: 'check-4',
    label: 'temporary check 4',
  },
  {
    value: 'check-5',
    label: 'temporary check 5',
  },
]

const Content = styled('Grid')`
  padding: 20px 0px;
  text-align: center;
`

export default function Issue() {
  const [inputs, setInputs] = React.useState({})
  const [stage, setStage] = React.useState(1)
  const [fetching, isFetching] = React.useState(false)

  React.useEffect(() => {
    new Promise((r) => setTimeout(r, 1000)).then(() => {
      isFetching(false)
    })
  }, [inputs])

  const handleSubmit = (e) => {
    e.preventDefault()
    isFetching(true)
    setInputs((prev) => ({
      ...prev,
      ...Object.fromEntries(new FormData(e.target)),
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
    </Content>
  )
}
