import React from 'react'
import { SingleCoinPairs } from './SingleCoinPairs'
import { SingleCoinSummary } from './SingleCoinSummary'

const SingleCoinView = () => {
    return (
        <div>
            <SingleCoinSummary />
            <SingleCoinPairs />

        </div>
    )
}

export default SingleCoinView
