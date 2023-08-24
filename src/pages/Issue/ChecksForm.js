import React from 'react'
import { DropDown, Section, Grid } from '@digicatapult/ui-component-library'
import styled from 'styled-components'

import { checks } from './fixtures'
import { Button, Input } from '../../components/shared'

const DatePicker = styled('input')`
  display: flex;
  height: 31px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid var(--black, #000);
  background: var(--white, #fff);
`

const layout = {
  style: {
    padding: '5px 0px',
    textAlign: 'center',
  },
  areas: [
    ['check', 'check'],
    ['expiry', 'issuance'],
  ],
  rows: ['minmax(0, 1fr)'],
  columns: ['1fr', '1fr'],
}

export default function ChecksForm({ inputs, handleSubmit, setStage }) {
  const [selected, setSelected] = React.useState(inputs.checks || [])

  return (
    <Section
      margin={'2px 5px'}
      headingLevel={1}
      background={'#FFF'}
      title={'Please add the check(s) passed.'}
    >
      <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
        <input type="hidden" value={JSON.stringify(selected)} name="checks" />
        <DropDown
          selected={selected}
          placeholder="select check"
          update={(val) => setSelected((prev) => [...prev, val])}
          options={checks.filter((el) => !selected.includes(el))}
        />
        {selected.map((el) => (
          <Grid key={el} {...layout}>
            <Grid.Panel area="check">
              <Input
                key={el.value}
                type="text"
                name={el.value}
                value={el.label}
              />
            </Grid.Panel>
            <Grid.Panel area="issuance">
              <DatePicker
                type="date"
                required
                name="issuance"
                onChange={(e) => {
                  e.preventDefault()
                  setSelected((prev) => [
                    ...prev.filter(
                      (item) => item.name === el.name && item.label === el.label
                    ),
                    { ...el, issuance: e.target.value },
                  ])
                }}
              />
            </Grid.Panel>
            <Grid.Panel area="expiry">
              <DatePicker
                onChange={(e) => {
                  e.preventDefault()
                  setSelected((prev) => [
                    ...prev.filter((item) => item.name === el.name),
                    { ...el, expiry: e.target.value },
                  ])
                }}
                name="expiry"
                type="date"
              />
            </Grid.Panel>
          </Grid>
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
