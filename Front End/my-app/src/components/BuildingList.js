import React from 'react';

const URL_Search = (props) => {
    //console.log('This is my directory file', this.props.data);

    fetch('https://api.github.com/search/code?q=Qtable+user:andderan')
    .then(response => response.json())
    .then(data => {
     console.log(data.items[0].html_url)
});

//const URL_List = props.data.filter(
//  building => building.name.toLowerCase().includes(props.filterText.toLowerCase())
//).map(directory => {
//    return (
//        <tr key={directory.id} onClick = {() => props.clickedBoi(directory.id) }>
//            <td>{directory.code} </td>
//            <td> {directory.name} </td>
//        </tr>
//    );
//});
//return <div>{buildingList}</div>;
 return null;
};
export default URL_Search;
