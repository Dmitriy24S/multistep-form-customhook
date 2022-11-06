import React, { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

const FormWrapper = ({ title, children }: Props) => {
  return (
    <>
      <h2>{title}</h2>
      <div className='form-inputs'>{children}</div>
    </>
  )
}

export default FormWrapper
