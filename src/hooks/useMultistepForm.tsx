import React, { ReactElement, useState } from 'react'

export const useMultistepForm = (forms: ReactElement[]) => {
  //   const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [currentPageIndex, setCurrentPageIndex] = useState(1)

  const prevPage = () => {
    // if (currentPageIndex <= 0) return
    if (currentPageIndex <= 1) return
    setCurrentPageIndex((index) => index - 1)
  }
  const nextPage = () => {
    // if (currentPageIndex >= forms.length - 1) return
    if (currentPageIndex >= forms.length) return
    setCurrentPageIndex((index) => index + 1)
  }

  return {
    currentPageIndex,
    // form: forms[currentPageIndex],
    form: forms[currentPageIndex - 1],
    forms,
    prevPage,
    nextPage,
    // isFirstPage: currentPageIndex === 0,
    isFirstPage: currentPageIndex === 1,
    // isLastPage: currentPageIndex === forms.length - 1
    isLastPage: currentPageIndex === forms.length
  }
}

// export default useMultistepForm
