import React from 'react'
//allows for use of metadata like a normal html head element
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className='layout'>
            <Head>
                <title>Ecommerce Store</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className='main-container'>
                Empty
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout