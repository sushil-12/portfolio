"use client"
import React from 'react'
import Header from './components/Header'
import { currencies, navigation } from './constants/data'
import MainPage from './components/MainPage'
import Footer from './components/Footer'

const EcommerceDemo = () => {
    return (
        <div className=''>
            <Header currencies={currencies} navigation={navigation} />
            <MainPage />
            <Footer />
        </div>
    )
}

export default EcommerceDemo
