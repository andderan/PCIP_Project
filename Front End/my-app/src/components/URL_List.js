import React from 'react';

const UrlSearch = (props) => {
    var url_list = []; //holds all valid urls from all users
    if(!!props.filterText.toLowerCase()) //If there is something on search bar
    {


      var repo_num = 2; //number of entries in data.js in the data folder
      var repos;
      for(repos = 0; repos < repo_num; repos++)
      {
           //props means outside of file. So this gets the filter text from search and the user from data.js
           fetch('https://api.github.com/search/code?q=' + props.filterText.toLowerCase() + '+user:' + props.data[repos].user)
          .then(response => response.json()) //turns the response into a json
          .then(data => //the json array is an array of arrays. for each chid array named item do whats inside
          {
               var urls;
               var url_number = data.items.length; //total urls

               for(urls = 0; urls < url_number; urls++) //increments through the urls from the user
               {
                 if(data.items[urls].html_url != null) //if there is an html url
                 {

									 url_list.push(data.items[urls].html_url);

                 }
               }

         });
     }

		 console.log(url_list);

   		return (
		<div> Check Console </div>

	);

    }
	else{
		return <div> Nothing Yet </div>}

};
export default UrlSearch;
