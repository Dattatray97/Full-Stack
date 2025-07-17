import React from "react";

const Cars = () => {
    const carsStyle = {
        padding: '15px',
        borderRadius: '10px',
        backgroundColor: 'red',
        color: 'black',
        width: '250px',
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        marginBottom: '10px',
        border:"1px solid black"
    };

    const carsData = [
        {
            name: 'BMW',
            manufacturer: 'VW',
            year: 2021,
            fuel: 'Petrol',
        },
        {
            name: 'Audi',
            manufacturer: 'Audi AG',
            year: 2020,
            fuel: 'Diesel',
        },
        {
            name: 'Mercedes',
            manufacturer: 'Daimler AG',
            year: 2022,
            fuel: 'Electric',
        },
        {
            name: 'Toyota',
            manufacturer: 'Toyota Motor Corporation',
            year: 2019,
            fuel: 'Hybrid',
        },
        {
            name: 'Ford',
            manufacturer: 'Ford Motor Company',
            year: 2021,
            fuel: 'Petrol',
        }
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {carsData.map((car, index) => (
                <table key={index} className="car1" style={carsStyle}>
                    <thead>
                        <tr>
                            <th colSpan="2">
                                <h4>Vehicle Information</h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vehicle Name:</td>
                            <td>{car.name}</td>
                        </tr>
                        <tr>
                            <td>Manufacture by:</td>
                            <td>{car.manufacturer}</td>
                        </tr>
                        <tr>
                            <td>Manufacture Year:</td>
                            <td>{car.year}</td>
                        </tr>
                        <tr>
                            <td>Fuel Type:</td>
                            <td>{car.fuel}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
}

export default Cars;
