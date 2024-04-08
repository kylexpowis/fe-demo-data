import React from 'react'
import { SingleCoinPairs } from './SingleCoinPairs'
import { SingleCoinSummary } from './SingleCoinSummary'
import Header from '@/components/custom/Header'

const SingleCoinView = () => {
    return (
        <div>
            <Header/>
            <SingleCoinSummary />
            <SingleCoinPairs />
        </div>
    )
}

export default SingleCoinView
