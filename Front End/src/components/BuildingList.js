import React, {useState, useEffect} from 'react';

const BuildingList = (props) => {
    //console.log('This is my directory file', this.props.data);
let buildID;
    const buildingList = props.data.filter(
      building => building.name === 'Hume Hall'
    ).map(directory => {
        return (
            <tr key={directory.id}>
                <td>{directory.code} </td>
                <td> onClick={ () => buildID = directory.id} = {directory.name} </td>
            </tr>
        );
    });
    console.log("Fuck");
    return <div>{buildingList}</div>;

};
export default BuildingList;
