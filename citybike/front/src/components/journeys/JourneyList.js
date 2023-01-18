import { useState, useEffect } from "react";
import journeyService from "../../services/journeyService";


//Display all data from database
const JourneyList = () => {

    const [journeys, setJourneys] = useState([]);
    console.log(journeys);

    const startHook = () => {
        console.log("Meni");

        journeyService.getAll()
            .then(response => {
                console.log("Meni4");
                const journeys = response
                setJourneys(journeys)
                console.log("startHook", journeys)
            })
            .catch(error => {
                console.log("ei löydy", error)
            })
    }
    
    useEffect(startHook);

    return (
        <div className="container">
            <h3 className="p-3 text-center">All journeys</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Departure time</th>
                        <th>Return time</th>
                        <th>Departure station</th>
                        <th>Return station</th>
                        <th>Travelled distance</th>
                        <th>Travel duration</th>
                    </tr>
                </thead>
                <tbody>
                    {journeys && journeys.map(journey =>
                        <tr key={journey.id}>
                            <td>{journey.departure}</td>
                            <td>{journey.return}</td>
                            <td>{journey.d_station_id}</td>
                            <td>{journey.r_station_id}</td>
                            <td>{journey.distance}</td>
                            <td>{journey.duration}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export { JourneyList };