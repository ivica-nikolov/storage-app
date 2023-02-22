import React from 'react';
import {Outlet} from 'react-router-dom';
import './App.css'

export function App(){


    return(
        <div id="app">
            <main>
                <Outlet/>
            </main>
        </div>
    )
}