
import React from 'react'
import NewCoinTable from '../../tables/NewCoinTable'
import { Summary } from "../../tables/Summary";
import { SingleCoinSummary } from "../singleCoin/SingleCoinSummary";
import NewPairTable from '../../tables/NewPairTable';

export default function Dashboard() {
  return (
    <div>
      <NewCoinTable />
      <NewPairTable />
      <Summary />
    </div>
  )
}

