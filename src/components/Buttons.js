import React from 'react';
import { useGlobalContext } from '../Context';
import './Buttons.css'
import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';



const Buttons = () => {

    const { isLoading, page, nbPages, handlePage } = useGlobalContext();

    return (
        
        <div className="buttons-wrapper">
            <Button variant="light" 
            clasName="button"
            disabled={isLoading} onClick={() => handlePage('decrease')}>Previous</Button>
            &nbsp;
             <h5>{page + 1} of {nbPages}</h5>
            &nbsp;
            <Button variant="dark" 
            clasName="button"
            disabled={isLoading}
            onClick={() => handlePage('increase')}>Next</Button>{' '}
        </div>
    )

}

export default Buttons;