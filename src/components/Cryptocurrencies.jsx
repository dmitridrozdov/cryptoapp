import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = () => {
    const { data: cryptosList, isFetching } = useGetCryptosQuery(10)
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)

    console.log(cryptos)

    return (
        <>
            <Row gutter={[32, 32]} className="crypto-card-container">
                
            </Row>
        </>
    )
}

export default Cryptocurrencies
