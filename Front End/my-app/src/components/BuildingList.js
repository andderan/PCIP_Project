import React from 'react';

const URL_Search = (props) => {
    //console.log('This is my directory file', this.props.data);
    var url;
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
         console.log(url)
         }
         d++;
       }

     });
     c++;
    }
    }

/*
const URL_List = (props) => {
    //console.log('This is my directory file', this.props.data);
    const urlList = props.data.filter().map(url => {
    if(!!url.filterText.toLowerCase())
    {
      fetch('https://api.github.com/search/code?q=' + props.filterText.toLowerCase() + '+user:andderan')
      .then(response => response.json())
      .then(data =>
      {
       console.log(
         data.items[0].html_url)
     });
    }

  });
  */
return null;
};
export default URL_Search;
