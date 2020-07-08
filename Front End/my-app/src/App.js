import React, {useState} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';


const App = (props) => {
    const [filterText, setFilterText] = useState('');
    const [selectedBuilding, setSelectedBuilding] = useState(0);
    const [newData, setData] = useState(props.data);
    const filterUpdate = (value) => {
        //Here you can set the filterText property of state to the value passed into this function
        setFilterText(value);
    };

    const selectedUpdate = (id) => {
        //Here you can update the selectedBuilding property of state to the id passed into this function
        setSelectedBuilding(id);
    };

    const newishData = (data) => {
      setData(data);
    };

    return (
        <div className="bg">
            <div className="row">
                <h1>96th RNCS Code Search</h1>
            </div>

            <Search filterUpdate = {filterUpdate}/>
            <main>
                <div className="row">
                    <div className="column1">
                        <div className="tableWrapper">
                            <table className="table table-striped table-hover">
                                <tr>
                                    <td>
                                        <b>URL</b>
                                    </td>
                                </tr>
                                <BuildingList
                                    data={props.data}
                                    filterText = {filterText}
                                    clickedBoi = {selectedUpdate}                               />
                            </table>
                        </div>
                    </div>
                    </div>
            </main>
        </div>
    );
};


export default App;
