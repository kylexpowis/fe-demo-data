
import React from 'react'
import NewCoinTable from '../../tables/NewCoinTable'
import { Summary } from "../../tables/Summary";
import { SingleCoinSummary } from "../singleCoin/SingleCoinSummary";

export default function Dashboard() {
  return (
    <div>
      <NewCoinTable />
      <Summary />
    </div>
  )
}

