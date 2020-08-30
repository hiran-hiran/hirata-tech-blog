import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'


const Layout = ({ children, categories }) => {
    return (
        <>
            <Header />
            <div className="content-wrap">
                <main>
                    {children}
                </main>
                <Sidebar categories={categories} />
            </div>
            <Footer />
        </>
    )
}

export default Layout
