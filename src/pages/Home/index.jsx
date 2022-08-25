import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'

import Header from '../../components/header'
import Category from '../../components/category'

export default function Index() {

    const [data, setData] = useState()

    useEffect(() => {
        async function getData() {
            const response = await axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
            setData(response.data)
        }
        getData()
    })

    return (
        <>
            <div className="home">
                <Header />
                {data &&
                    <Category categories={data[0].table_menu_list} />
                }
            </div>
        </>
    )
}