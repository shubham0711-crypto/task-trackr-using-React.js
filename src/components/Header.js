import React from 'react'
import Button from './Button'

const Header = (props) => {
    return (
        <header style={headerstyle}>
            {props.title}
            <Button title='hello' />
        </header>
    )
}

const headerstyle = {
    color:'red'
}
export default Header
