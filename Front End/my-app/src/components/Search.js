import React from 'react';


const Search = (props) => {

    const filterUpdate = () => {
        props.filterUpdate(document.getElementsByTagName('input')[0].value);
        console.log(document.getElementsByTagName('input')[0].value);
    };

    return (
        <form>
            <input type="text" placeholder="Type Key Word to Filter"/>
            <button
            onClick = {filterUpdate} type='button'>
                          Submit
            </button>
        </form>
    );

};

export default Search;
