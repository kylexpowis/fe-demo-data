import React, { useEffect, useState } from 'react'
import { getNewPairs } from '../../../config/api'
import { format } from "date-fns";

export default function NewPairTable() {
    const [newPairs, setNewPairs] = useState([]);
    useEffect(() => {
        getNewPairs()
            .then((pairs) => {
                console.log(pairs);
                setNewPairs(pairs);

            })
            .catch((err) => {
                console.error("Failed to fetch new pairs.", err);

            });
    }, []);
    return (
        <div>
            <h2>New Pairs Table</h2>
            {Array.isArray(newPairs) && newPairs.length > 0 ? newPairs.map((pair) => (
                <p>
                    {pair.pair_name}
                    {format(new Date(pair.date_added), "PPpp")}
                    {pair.is_active}
                </p>
            )) : (
                <p>
                    No New Pairs
                </p>
            )}
        </div>
    )
}
