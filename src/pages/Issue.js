import React from 'react'
import styled from 'styled-components'
import { DropDown, Section } from '@digicatapult/ui-component-library'
import Spinner from '../components/Spinner'

const checks = [
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

const Button = styled('button')`
  height: 30px;
  border-radius: 8px;
  border: 1px solid #000;
  background: #fff;
  margin-right: 3px;
  box-shadow: 0px 2px 0px 0px #000;
`

const Input = styled('input')`
  width: 100%;
  height: 35px;
  margin-bottom: 5px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid var(--black, #000);
  background: var(--white, #fff);
`

const Content = styled('Grid')`
  padding: 20px 0px;
  text-align: center;
`

// TODO move
const ChecksForm = ({ inputs, handleSubmit, setStage }) => {
  const [selected, setSelected] = React.useState(inputs.checks || [])

  return (
    <Section
      margin={'2px 5px'}
      headingLevel={1}
      background={'#FFF'}
      title={'Please add the check(s) passed.'}
    >
      <form onSubmit={handleSubmit}>
        <DropDown
          selected={selected}
          placeholder="select check"
          update={(val) => setSelected((prev) => [...prev, val])}
          options={checks.filter((el) => !selected.includes(el))}
        />
        {selected.map((el) => (
          <Input key={el.value} type="text" name={el.value} value={el.label} />
        ))}
        <Button
          onClick={(e) => {
            e.preventDefault()
            setStage((prev) => prev - 1)
          }}
        >
          {'<'}
        </Button>
        <Button type="submit">Next</Button>
      </form>
    </Section>
  )
}

// TODO move
const CompanyDetailsForm = ({ handleSubmit, inputs }) => (
  <form onSubmit={handleSubmit}>
    <Section
      margin={'2px 0px'}
      headingLevel={1}
      background={'#FFF'}
      title={'Add Supplier Company Details'}
    >
      <span style={{ fontSize: '8px' }}>Enter details</span>
    </Section>
    <Section margin={'2px 0px'} headingLevel={2} background={'#FFF'}>
      <Input
        type="text"
        required
        name="name"
        value={inputs.name}
        placeholder="Company name"
      />
      <Input
        required
        type="number"
        name={'houseNo'}
        value={inputs.houseNo}
        placeholder="Company house no."
      />
      <Input
        type="email"
        required
        value={inputs.email}
        name="email"
        placeholder="Contact email"
      />
      <Button type="submit" style={{ marginTop: '25px', marginLeft: '2px' }}>
        Next
      </Button>
    </Section>
  </form>
)

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
