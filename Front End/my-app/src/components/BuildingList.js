import React from 'react';

const URL_Search = (props) => {
    var url;
    var url_list = [];
    if(!!props.filterText.toLowerCase())
    {
      var repo_num = 2;
      var c = 0;
      while(c < repo_num)
      {
          fetch('https://api.github.com/search/code?q=' + props.filterText.toLowerCase() + '+user:' + props.data[c].user)
          .then(response => response.json())
          .then(data =>
          {
           var d = 0;
           var url_number = data.items.length;
           while(d < url_number)
           {
             if(data.items[d].html_url != null)
             {
             url = data.items[d].html_url;
             //console.log(url)S
             if(!url)
             {}
             else {
               url_list.push(url);
             }
             }
             d++;
           }

         });
         c++;
    }
        console.log(url_list);
    }
    var d = 0;
    const returnUrl = url_list.map(directory => {
      console.log(directory);
        return (
            <tr> {directory}
                <td> </td>
            </tr>
        );
    });

    console.log(returnUrl);
    return returnUrl;
};
export default URL_Search;
