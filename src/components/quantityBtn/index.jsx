import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.scss'

export default function Index({ dish }) {

    const dispatch = useDispatch()
    let cart = useSelector((state) => state.Cart)
    let productCount = useSelector((state) => state.ProductsCount[dish]) || 0

    function ButtonClicked(value) {

        if (value === 1) {
            dispatch({ type: 'PRODUCT_COUNT', payload: { dish: dish, count: ++productCount } })
            dispatch({ type: 'COUNT_CART', payload: ++cart })
        } else if (value === -1) {
            if (productCount === 0) {
                return
            } else {
                dispatch({ type: 'PRODUCT_COUNT', payload: { dish: dish, count: --productCount } })
                dispatch({ type: 'COUNT_CART', payload: --cart })
            }
        }
    }

    return (
        <>
            <div className="quantityBtn">
                <span onClick={() => ButtonClicked(-1)}>-</span>
                <span>{productCount}</span>
                <span onClick={() => ButtonClicked(1)}>+</span>
            </div>
        </>
    )
}