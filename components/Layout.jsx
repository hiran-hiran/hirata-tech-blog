import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import TopTitle from './TopTitle'


const Layout = ({ children, categories }) => {
    return (
        <>
            <Header />
            <TopTitle />
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
