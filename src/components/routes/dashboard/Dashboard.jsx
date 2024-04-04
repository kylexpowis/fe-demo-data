import React from "react";
import NewCoinTable from "../../tables/NewCoinTable";
import { Summary } from "../../tables/Summary";
import { SingleCoinSummary } from "../singleCoin/SingleCoinSummary";
import NewPairTable from "../../tables/NewPairTable";
import MCROCTable from "../../tables/MCTable";
import Vol24HrTable from "../../tables/Vol24HourTable";

export default function Dashboard() {
  return (
    <div>
      <NewCoinTable />
      <NewPairTable />
      <Summary />
      <MCROCTable />
      <Vol24HrTable />
    </div>
  );
}
