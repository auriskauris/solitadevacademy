import { useState, useEffect } from "react";
import stationService from "../../services/stationService";

//Display all data from database
const StationList = () => {

    const [stations, SetStations] = useState([]);
    console.log(stations);

    const startHook = () => {
        console.log("Meni Tänne");

        stationService.getAll()
            .then(response => {
                console.log("MeniStations1");
                const stations = response
                SetStations(stations)
                console.log("startHook", stations)
            })
            .catch(error => {
                console.log("ei löydy1", error)
            })
    }
    
    useEffect(startHook);

    return (
        <div className="container">
            <h3 className="p-3 text-center">All stations</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Station name:</th>
                        <th>Address:</th>
                        <th>City:</th>
                        <th>Operator:</th>
                        <th>Capacity:</th>
                    </tr>
                </thead>
                <tbody>
                    {stations && stations.map(station =>
                        <tr key={station.id}>
                            <td>{station.name}</td>
                            <td>{station.address}</td>
                            <td>{station.city}</td>
                            <td>{station.operator}</td>
                            <td>{station.capacity}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export { StationList };