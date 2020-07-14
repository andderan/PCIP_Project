import React from 'react';

function UrlSearchWaiting(Component){
  return function UrlSearchWaiting({isLoading, ...props}) {
    if(!isLoading) return <Component {...props} />;

    return(
      <p style={{ textAlign: 'center', fontSize: '30px'}}>
        Hold on, still loading
      </p>
    );
  };
}

export default UrlSearchWaiting;
