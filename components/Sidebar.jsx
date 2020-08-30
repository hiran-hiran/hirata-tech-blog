import React from 'react'
import Categories from './Categories'


const Sidebar = ({categories}) => {

    return (
        <aside>
            <Categories categories={categories} />
        </aside>
    )
}


export default Sidebar
