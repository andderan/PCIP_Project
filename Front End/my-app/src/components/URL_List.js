import React from 'react';

const URL_Search = (props) => {
    var url; //dummy variable
    var url_list = []; //holds all valid urls from all users
    if(!!props.filterText.toLowerCase()) //If there is something on search bar
    {
      var repo_num = 2; //number of entries in data.js in the data folder
      var c = 0;
      while(c < repo_num)
      {
           //props means outside of file. So this gets the filter text from search and the user from data.js
          fetch('https://api.github.com/search/code?q=' + props.filterText.toLowerCase() + '+user:' + props.data[c].user)
          .then(response => response.json()) //turns the response into a json
          .then(data => //the json array is an array of arrays. for each chid array named item do whats inside
          {
               var d = 0;
               var url_number = data.items.length; //total urls

               while(d < url_number) //increments through the urls from the user
               {
                 if(data.items[d].html_url != null) //if there is an html url
                 {
                   url = data.items[d].html_url; //save it to dummy variable
                   //console.log(url)
                   if(!url) //check to see if the url is null.
                   {}
                   else
                   {
                     url_list.push(url); //if it is not null, push to the total url_list
                   }
                 }
                 d++;
               }
         });
         c++;
    }
        console.log(url_list); //logs url list to website console. Right click site and hit inspect
    }

    //working on return statements here
    var d = 0;
    const returnUrl = url_list.map(directory => {
      console.log(directory);
        return (
            <tr> {directory}
                <td> </td>
            </tr>
        );
    });

  //console.log(returnUrl);
    return returnUrl;
};
export default URL_Search;
