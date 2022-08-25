import React from 'react'
import './index.scss'
import { useSelector } from 'react-redux'


export default function Index() {

    const cart = useSelector((state) => state.Cart)

    return (
        <>
            <div className="header">
                <div className='title'>
                    <h1>UNI Resto Cafe</h1>
                </div>
                <div className='options'>
                    <ul>
                        <li>My Orders</li>
                        <li><i className='fa fa-shopping-cart'></i></li>
                        <span>{cart}</span>
                    </ul>
                </div>
            </div>
        </>
    )
}