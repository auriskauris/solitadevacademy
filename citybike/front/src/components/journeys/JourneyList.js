import {useState} from "react";

const JourneyList = ({allJourneys}) => {
    
 
    return (
        <div>
            <h1>All journeys</h1>
            {journeys.map(c =>
            
            <div key={c.journeys_id}>

                Departure day and time: {c.journeys_departure}<br></br>
                Return day and time: {c.journeys_return}<br></br>
                Departure station: {c.journeys_d_station_id}<br></br>
                Return station: {c.journeys_r_station_id}<br></br>
                Travelled distance: {c.journeys_distance}<br></br>
                Travel duration: {c.journeys_duration}
                </div>
            )} 
            
        </div>
    )
}
export {NotesList};