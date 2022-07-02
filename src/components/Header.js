import React, {useState, useEffect, Component} from 'react';
import {Link} from "react-router-dom";
import {Route, Routes, BrowserRouter} from 'react-router-dom';

export default function Header(props) {


    return <div className='header'>
        <h1>Kreator listy zakupów</h1>
        <div className='link'>
            <Link to="/contact"><p>Kontakt</p></Link>
            <Link to="/about"><p>O nas</p></Link>
        </div>
   </div>;

}
