import React from 'react';

const Search = (props) => {
    const filterUpdate = () => {
        //Here you will need to update the value of the filter with the value from the textbox
        this.props.filterUpdate()

        };

    };
    //You will need to save the value from the textbox and update it as it changes
    //You will need the onChange value for the input tag to capture the textbox value

    return (
        <form onChange = {filterUpdate()}>
            <input type="text" placeholder="Type to Filter"/>
        </form>
    );

};

export default Search;
