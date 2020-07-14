import React from 'react';

const UrlSearch = (props) => {

		var url_list = [];
		const {urls} = props;
		console.log("In search " + urls);
		if(!urls || urls.length === 0) return <p> No Results </p>;


		for(var i = 0; i < urls.total_count; i++){
			if(urls.items[i].html_url != null)
			{
				url_list.push(urls.items[i].html_url)
			}
		}

		console.log(url_list);
		return (
			<ul>
				<h2 className='list-head'>Links to matching code</h2>
				{url_list.map((url) => {
						return(
							<li key={url.id} className='list'>
								<span className='url'>{url} </span>
							</li>
						);

				})};
			</ul>
		);
};

export default UrlSearch;

/*

const AsyncFetch = async (url) => {
	console.log("Inside Async");
	var repo_num = 2;
	var url_list = [];
	for(var i = 0; i < repo_num; i++)
	{
		console.log("Right before Fetch");
		const response  = await fetch('https://api.github.com/search/code?q=Qtable+user:andderan');
		const results = await response.json();
		console.log("Right after Fetch");

		for(var j = 0; j < results.items.length; j++)
		{
			if(results.items[j].html_url != null)
			{
				console.log("Result loop")
				url_list.push(results.items[j].html_url);
			}
		}
	}

	return url_list;
}


const UrlSearch = (props) => {
    var url_list = []; //holds all valid urls from all users
    if(!!props.filterText.toLowerCase()) //If there is something on search bar
    {

	/*
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
			//	url_list.push(<Item key = {urls}> item = { data.items[urls].html_url}/>);

			console.log("For Loop itr " + url_list.length);
			url_list.push(data.items[urls].html_url);

                 }
               }

         });
     }
     */
/*

	url_list = AsyncFetch("TEST"); // Right now the URL is hardcoded to search my repos for Qtable
        console.log("Printing list " + url_list); //logs url list to website console. Right click site and hit inspect
	console.log("List Size is " + url_list.length);


   		return (
		<div> The list length is {url_list.length} </div>

	);

    }
	else{
		return <div> Nothing Yet </div>}

    //working on return statements here


};

*/
