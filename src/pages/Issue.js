import React from 'react'
import styled from 'styled-components'
import { DropDown, Grid, Section } from '@digicatapult/ui-component-library'

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

const Input = styled('input')`
  width: 100%;
  height: 25px;
`

const Content = styled('Grid')`
  padding: 20px 0px;
`

export default function Issue() {
  const [selected, setSelected] = React.useState([])
  const update = (val) => {
    const uniq =
      [...selected, val].filter((el, i, arr) => arr.indexOf(el) === i) || []
    setSelected(uniq)
  }

  return (
    <Content>
      <Section
        margin={'2px 0px'}
        headingLevel={1}
        title={'Add Supplier Company name'}
      >
        <Input type="text" />
      </Section>
      <Section
        margin={'2px 0px'}
        headingLevel={2}
        height={'100px'}
        title={'Please add the check(s) passed'}
      >
        <DropDown
          selected={selected}
          update={update}
          options={checks.filter((el) => !selected.includes(el))}
        />
      </Section>
      {selected.map((el) => {
        return (
          <Grid
            key={el.value}
            style={{
              textAlign: 'center',
              border: 'solid 1px',
              lineHeight: '25px',
              marginTop: '2px',
            }}
            areas={[['label', 'button']]}
            columns={['1fr', 'minmax(10%, 20%)']}
            rows={['25px']}
          >
            <Grid.Panel area="label">
              <div>{el.label}</div>
            </Grid.Panel>
            <Grid.Panel area="button">
              <div style={{ cursor: 'pointer', width: '20px' }}>x</div>
            </Grid.Panel>
          </Grid>
        )
      })}
      {selected.length > 0 && <button>Next</button>}
    </Content>
  )
}
