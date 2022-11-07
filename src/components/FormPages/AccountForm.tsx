import React from 'react'
import FormWrapper from '../FormWrapper'

type AccountData = {
  email: string
  password: string
}

type Props = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

const AccountForm = ({ email, password, updateFields }: Props) => {
  return (
    <FormWrapper title='Account Creation'>
      <fieldset>
        <label htmlFor='email'>Email</label>
        <input
          autoFocus
          required
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          placeholder='name@email.com'
        />
      </fieldset>
      <fieldset>
        <label htmlFor='password'>Password</label>
        <input
          required
          type='password'
          name='passowrd'
          id='password'
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
          placeholder='Enter password'
        />
      </fieldset>
    </FormWrapper>
  )
}

export default AccountForm
