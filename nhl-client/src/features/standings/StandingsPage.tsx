import axios from 'axios';
import { useEffect, useState } from 'react';
import Spinner from '../common/Spinner';
import Division from './Division';

export default function StandingsPage() {

    const [loading, setLoading] = useState(true);
    const [standings, setStandings] = useState<any>({});

    useEffect(() => {
        document.title = 'NHL | Standings';
        axios.get('https://statsapi.web.nhl.com/api/v1/standings')
        .then(response =>setStandings(response.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, [])

    if (loading) return (
        <Spinner />
    )

    // if (standings) {  
    //     console.log("printing standings");
    //     console.log(standings.records[0].division.id);
    // }
    
    return (
        <>
            {standings.records.map((div:any, index:number) => (
                <Division key={div.division.id} division={div} />
            ))} 
        </>
    )
}