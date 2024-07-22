import React from 'react'
import Newsletter from '../../Components/NewsLetter'
import Card from './components/Card'
import Header from '../../Components/Header'

export default function Article() {
  return (
    <>
    <Header/>
    <div className='py-16'>

      <div>

      <h1 className='text-5xl font-bold text-center text-custom-Primary'>Article</h1>
      <p className='text-base text-center pt-2 text-custom-SemiBlack'>lorem ipsum dolor sit amet</p>
      </div>
      <Card/>
    </div>
      <Newsletter/>
    </>

    
  )
}
