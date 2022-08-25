import React, { useEffect } from 'react'
import './index.scss'

import green from '../../images/green.png'
import red from '../../images/red.png'

import Button from '../quantityBtn'

export default function Index({ dishes }) {

    return (
        <>
            <div className="dish">
                <div className='type'>
                    <img src={(dishes.dish_Type === 1 ? red : green)} alt="" />
                </div>
                <div className='details'>
                    <h5>{dishes.dish_name}</h5>
                    <h6>SAR {dishes.dish_price}</h6>
                    <p>{dishes.dish_description}</p>
                    {dishes.dish_Availability ?
                        <Button dish={dishes.dish_name} />
                        :
                        <p data-availability={false}>Not available</p>
                    }
                    {
                        dishes.addonCat.length != 0 && <p data-availability={false}>customizations available</p>
                    }
                </div>
                <div className='calory'>
                    <p>{dishes.dish_calories} calories</p>
                </div>
                <div className='image'>
                    <img src={dishes.dish_image} alt="" />
                </div>
            </div>
        </>
    )
}