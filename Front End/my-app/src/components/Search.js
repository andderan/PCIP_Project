import React from 'react';


const Search = (props) => {

    const filterUpdate = () => {
        props.filterUpdate(document.getElementsByTagName('input')[0].value);
    };
    //You will need to save the value from the textbox and update it as it changes
    //You will need the onChange value for the input tag to capture the textbox value

    return (
        <form onChange = {filterUpdate}>
            <input type="text" placeholder="Type Key Word to Filter"/>
        </form>
    );

};

export default Search;
