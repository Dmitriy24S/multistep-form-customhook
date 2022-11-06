import React from 'react'
import FormWrapper from '../FormWrapper'

type AddressFormData = {
  street: string
  city: string
  country: string
}

type Props = AddressFormData & {
  updateFields: (fields: Partial<AddressFormData>) => void
}

const AddressForm = ({ street, city, country, updateFields }: Props) => {
  return (
    <FormWrapper title='Address Details'>
      <label htmlFor='country'>Country</label>
      <input
        autoFocus
        required
        type='text'
        id='country'
        value={country}
        onChange={(e) => updateFields({ country: e.target.value })}
      />
      <label htmlFor='street'>Street</label>
      <input
        required
        type='text'
        id='street'
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label htmlFor='city'>City</label>
      <input
        required
        type='text'
        id='city'
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
    </FormWrapper>
  )
}

export default AddressForm
