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
      <fieldset>
        <label htmlFor='country'>Country</label>
        <input
          autoFocus
          required
          type='text'
          id='country'
          value={country}
          onChange={(e) => updateFields({ country: e.target.value })}
          placeholder='e.g: Estonia'
        />
      </fieldset>
      <fieldset>
        <label htmlFor='street'>Street</label>
        <input
          required
          type='text'
          id='street'
          value={street}
          onChange={(e) => updateFields({ street: e.target.value })}
          placeholder='e.g: Street 1'
        />
      </fieldset>
      <fieldset>
        <label htmlFor='city'>City</label>
        <input
          required
          type='text'
          id='city'
          value={city}
          onChange={(e) => updateFields({ city: e.target.value })}
          placeholder='e.g: Tallinn'
        />
      </fieldset>
    </FormWrapper>
  )
}

export default AddressForm
