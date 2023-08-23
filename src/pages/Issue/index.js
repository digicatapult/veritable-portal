import React from 'react'
import styled from 'styled-components'
import Spinner from '../../components/Spinner'
import ChecksForm from './ChecksForm'
import { Section, Grid } from '@digicatapult/ui-component-library'
import CompanyDetailsForm from './CompanyDetailsForm'
import { Button } from '../../components/shared'

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

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || 'center'};
`

const WarnBox = styled('div')`
  display: flex;
  height: 28px;
  flex-direction: row;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: Roboto Mono;
  font-size: 6px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
`

const TableHeading = styled('th')`
  font-style: italic;
  font-size: 8px;
`

export default function Issue() {
  const [inputs, setInputs] = React.useState({
    name: 'asdasdasd asda ',
    houseNo: 123121,
    email: 'emailasd@asd',
    checks: [],
  })
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
      {stage === 2 && (
        <Grid
          gap={'10px'}
          rows={['auto']}
          columns={['minmax(0, 1fr)]']}
          areas={[['header'], ['supplier'], ['checks'], ['warn'], ['buttons']]}
        >
          <Grid.Panel justifySelf="auto" area="header">
            <Section
              headingLevel={1}
              headingSize="24px"
              background={'#FFF'}
              title={'Final Confirmation'}
            >
              <div style={{ fontSize: '8px' }}>
                You're about to issue a certificate for Sam&apos;s Batteries based on
                the details and checks provided. Please review the summary one
                last time to ensure accuracy.
              </div>
            </Section>
          </Grid.Panel>
          <Grid.Panel area="supplier">
            <Section
              headingLevel={1}
              headingSize="8px"
              background={'#FFF'}
              title={'Supplier Details'}
            >
              <div style={{ fontSize: '6px' }}>
                <b>Company Name: </b>
                {inputs.name}
              </div>
              <div style={{ fontSize: '6px' }}>
                <b>Company House No.: </b>
                {inputs.houseNo}
              </div>
              <div style={{ fontSize: '6px' }}>
                <b>Company Email: </b>
                {inputs.email}
              </div>
            </Section>
          </Grid.Panel>
          <Grid.Panel area="checks">
            <Section
              headingLevel={1}
              headingSize="8px"
              background={'#FFF'}
              title={'Checks Passed'}
            >
              <table>
                <tr>
                  <TableHeading width="70%" alignText="left">
                    Name of checks
                  </TableHeading>
                  <TableHeading>Issuance date</TableHeading>
                  <TableHeading>Expiry date</TableHeading>
                </tr>
                {inputs.checks ||
                  [].map((el) => {
                    return (
                      <tr>
                        {Object.keys(el).map((key) => (
                          <td>{el[key]}</td>
                        ))}
                      </tr>
                    )
                  })}
              </table>
            </Section>
          </Grid.Panel>
          <Grid.Panel area="warn">
            <Section
              margin={'2px 0px'}
              headingLevel={1}
              headingSize="8px"
              background={'rgba(255, 0, 0, 0.20);'}
            >
              <WarnBox>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path d="M12 10V13" stroke="black" strokeLinecap="round" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.1381 4.46529C11.5247 3.80798 12.4753 3.80798 12.8619 4.46529L21.1135 18.493C21.5057 19.1596 21.025 20 20.2516 20H3.74842C2.975 20 2.49435 19.1596 2.88648 18.493L11.1381 4.46529Z"
                    stroke="black"
                    strokeLinejoin="round"
                  />
                </svg>
                Once you proceed, a digital certificate will be generated and
                sent to the supplier. This action is irreversible.
              </WarnBox>
            </Section>
          </Grid.Panel>
          <Grid.Panel area="buttons">
            <Row>
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  setStage((prev) => prev - 1)
                }}
              >
                {'<'}
              </Button>
              <Button>{'Confirm >'}</Button>
            </Row>
          </Grid.Panel>
        </Grid>
      )}
    </Content>
  )
}
