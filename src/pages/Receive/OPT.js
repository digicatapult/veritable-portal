import React from 'react'
import styled from 'styled-components'
import { Grid } from '@digicatapult/ui-component-library'
import { Button, Input } from '../../components/shared'

const InputRow = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`

const Font = styled('div')`
  color: var(--black, #000);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export default function OPT({ handleInputs }) {
  return (
    <Grid
      rows={['1fr', 'auto']}
      columns={['auto']}
      gap="25px"
      alignItems="center"
      areas={[['title'], ['form']]}
    >
      <Grid.Panel
        justifySelf={'center'}
        style={{ width: '80%' }}
        area={'title'}
      >
        <Font>
          {
            'Please enter the 6-digit OTP from the post to complete the verification process.'
          }
        </Font>
      </Grid.Panel>
      <Grid.Panel
        justifySelf={'center'}
        style={{ textAlign: 'center', width: '80%' }}
        area={'form'}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const opt = Object.fromEntries(new FormData(e.target))
            return handleInputs({ opt })
          }}
        >
          <InputRow>
            {new Array(7).fill(undefined).map((_, i) => {
              if (i === 3) return <Font>{'-'}</Font>
              return (
                <Input
                  type="text"
                  pattern="[0-9]"
                  key={`opr-${i}`}
                  name={`opt-digit-${i}`}
                  maxLength={1}
                  required
                />
              )
            })}
          </InputRow>
          <br />
          <Button>{'>'}</Button>
        </form>
      </Grid.Panel>
    </Grid>
  )
}
