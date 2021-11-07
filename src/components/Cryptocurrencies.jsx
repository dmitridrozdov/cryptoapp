import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins)
        const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm))
        setCryptos(filteredData)
    }, [cryptosList, searchTerm])
    
    if (isFetching) return <Loader />

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
                </div>
            )}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link key={currency.id} to={`/crypto/${currency.id}`}>
                            <Card
                                headStyle={{backgroundColor: 'rgba(250, 250, 250, 1)' }}
                                title={`${currency.rank}. ${currency.name}`} 
                                extra={<img className="crypto-image" src={currency.iconUrl} />} 
                                hoverable
                            >
                                <p style={{fontFamily: 'BioRhyme', fontSize: '16px'}}>Price: <span style={{ color: currency.change > 0 ? 'green' : 'red', fontWeight: 'bold'}}>{millify(currency.price)}</span></p>
                                <p style={{fontFamily: 'BioRhyme', fontSize: '16px'}}>Market Cap: {millify(currency.marketCap)}</p>
                                <p style={{fontFamily: 'BioRhyme', fontSize: '16px'}}>Daily Change: <span style={{ color: currency.change > 0 ? 'green' : 'red', fontWeight: 'bold'}}>{currency.change}%</span></p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies
