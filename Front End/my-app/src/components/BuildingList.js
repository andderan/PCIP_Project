import React from 'react';

const BuildingList = (props) => {
    //console.log('This is my directory file', this.props.data);
    const buildingList = props.data.filter(
      building => building.name.toLowerCase().includes(props.filterText.toLowerCase())
    ).map(directory => {
        return (
            <tr key={directory.id} onClick = {() => props.clickedBoi(directory.id) }>
                <td>{directory.code} </td>
                <td> {directory.name} </td>
            </tr>
        );
    });
    return <div>{buildingList}</div>;

};
export default BuildingList;
