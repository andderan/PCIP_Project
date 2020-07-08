import React from 'react';

const ViewBuilding = (props) => {
    if(!props.id)
    {
    return (
        <div>
            <p>
                  <i>Click on a name to view more information</i>

            </p>
        </div>
    );
  }
  else {
    return (
        <div>
            <h1>
                {props.data[props.id-1].name}
            </h1>
            <p>
                Code:    {props.data[props.id-1].code}
            </p>
            {
                props.data[props.id-1].address &&
                <p>   Address:    {props.data[props.id-1].address} </p>}
            {
                props.data[props.id-1].coordinates &&
                <p>    Coordinates:   {props.data[props.id-1].coordinates.latitude} , {props.data[props.id-1].coordinates.longitude} </p>}
        </div>
    );

}
};
export default ViewBuilding;
