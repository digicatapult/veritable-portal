import React from 'react'
import { Section } from '@digicatapult/ui-component-library'
import { Input, Button } from '../../components/shared'

export default function CompanyDetailsForm({ handleSubmit, inputs }) {
  return (
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
}
