import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import Loader from './Loader'

const { Text, Title } = Typography
const { Option } = Select

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data } = useGetCryptosQuery(100)
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 })

    if (!cryptoNews?.value) return <Loader />

    return (
        <div>
            News
        </div>
    )
}

export default News
