import React from 'react'
import { DropDown, Section, Grid } from '@digicatapult/ui-component-library'

import { checks } from '.'
import { Button, Input } from '../../components/shared'

export default function ChecksForm({ inputs, handleSubmit, setStage }) {
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
          <Grid
            areas={[
              ['check', 'check'],
              ['expiry', 'order'],
            ]}
            rows={['minmax(0, 1fr)']}
            columns={['1fr', '1fr']}
          >
            <Grid.Panel area="check">
              <Input
                key={el.value}
                type="text"
                name={el.value}
                value={el.label}
              />
            </Grid.Panel>
            <Grid.Panel area="expiry">
              <input type="date" />
            </Grid.Panel>
            <Grid.Panel area="order">
              <input style={{ marginBottom: '6px' }} type="date" />
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
