import React, { FormEvent, useState } from 'react'
import './App.css'
import AccountForm from './components/FormPages/AccountForm'
import AddressForm from './components/FormPages/AddressForm'
import UserForm from './components/FormPages/UserForm'
import { useMultistepForm } from './hooks/useMultistepForm'

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  country: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  country: '',
  email: '',
  password: ''
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)

  const { currentPageIndex, form, forms, prevPage, nextPage, isFirstPage, isLastPage } =
    useMultistepForm([
      <AccountForm {...data} updateFields={updateFields} />,
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />
    ])

  // const handleInputChange = () => {
  // const updateFields = (fields: Partial<FormData>) => {
  function updateFields(fields: Partial<FormData>) {
    console.log('fields', fields, 'data', data)
    setData((prevData) => {
      // return { ...prevData, fields } // ! wrong -> need to extract/spread otherwise no input update:
      // {firstName: '', lastName: '', age: '', street: '', city: '', …}
      // country: ""
      // email: ""
      // fields: {email: 'gg'}
      return { ...prevData, ...fields }
    })
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!isLastPage) return nextPage()
    alert('Successful Account Creation')
    console.log('data', data)
  }

  return (
    <div className='App'>
      <h1>Multistep Form</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-page-indicator'>
          {currentPageIndex} / {forms.length}
        </div>
        {form}
        <div className='form-controls'>
          {!isFirstPage && (
            <button type='button' onClick={prevPage}>
              Prev
            </button>
          )}
          <button type='submit'>{isLastPage ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </div>
  )
}

export default App
