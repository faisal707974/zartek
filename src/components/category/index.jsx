import React, { useState } from 'react'
import './index.scss'

import Dish from '../dish'

export default function Index({ categories }) {

    const [option, setOption] = useState(0)

    return (
        <>
            <div className="category">
                <div className='heading'>
                    <ul>
                        {
                            categories && categories.map((obj, index) => {
                                return (
                                    <li className={(option === index ? 'active' : '')} key={index} onClick={() => setOption(index)}>{obj.menu_category}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    {
                        categories && categories[option].category_dishes?.map((obj, index) => {
                            return (
                                <Dish key={index} dishes={obj} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}