import React from 'react'
import { SingleCoinPairs } from './SingleCoinPairs'
import { SingleCoinSummary } from './SingleCoinSummary'

export const SingleCoinView = () => {
    return (
        <div>
            <SingleCoinSummary />
            <SingleCoinPairs />

        </div>
    )
}
