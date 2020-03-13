import React, {useEffect, useState} from "react";
import Train from "./Train";

const Trains = () => {
    const [trains, setTrains] = useState([]);

    async function fetchData() {
        const res = await fetch('http://localhost:8080?departureStation=FPK&destinationStation=HFN');

        res.json()
            .then(res => setTrains(res))
    }

    useEffect(() => {
        fetchData();
    }, []);

    return trains.map((train, i) => (<Train scheduledTime={train.scheduledTimeOfDeparture}
                                            expectedTime={train.estimatedTimeOfDeparture}
                                            status={train.status}
                                            key={i}/>))
};

export default Trains;