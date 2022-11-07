import React from 'react'
import FormWrapper from '../FormWrapper'

type UserFormData = {
  firstName: string
  lastName: string
  age: string
}

type Props = UserFormData & {
  updateFields: (fields: Partial<UserFormData>) => void
}

const UserForm = ({ firstName, lastName, age, updateFields }: Props) => {
  return (
    <FormWrapper title='User Details'>
      <fieldset>
        <label htmlFor='firstName'>First Name</label>
        <input
          autoFocus
          required
          type='text'
          id='firstName'
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
          placeholder='e.g: John'
        />
      </fieldset>
      <fieldset>
        <label htmlFor='lastName'>Last Name</label>
        <input
          required
          type='text'
          id='lastName'
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
          placeholder='e.g: Doe'
        />
      </fieldset>
      <fieldset>
        <label htmlFor='age'>Age</label>
        <input
          required
          type='number'
          id='age'
          value={age}
          onChange={(e) => updateFields({ age: e.target.value })}
          placeholder='e.g: 25'
        />
      </fieldset>
    </FormWrapper>
  )
}

export default UserForm
