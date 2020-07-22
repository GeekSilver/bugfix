import React from 'react'
import Navbar from './Navbar'
import Cookie from './Cookie'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <div className="container-fluid">
            <Navbar />
            {children}
            <Cookie />
            <Footer />
        </div>
    );
} 
 
 export default Layout