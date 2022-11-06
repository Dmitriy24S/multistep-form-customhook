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
      <label htmlFor='firstName'>First Name</label>
      <input
        autoFocus
        required
        type='text'
        id='firstName'
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label htmlFor='lastName'>Last Name</label>
      <input
        required
        type='text'
        id='lastName'
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label htmlFor='age'>Age</label>
      <input
        required
        type='number'
        id='age'
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  )
}

export default UserForm
