import React from 'react'

const TheNobelCard = ({country,index}) => {
  return (
  
          <div class="card w-50 m-5" style={{display:'inline-block' ,margin: '20'}}>
            <div className="card-body" key={index}>
              <h5 className="card-title">{country.name}</h5>
             {country.code  ?
              <a href="#" className="btn btn-primary">
                {country.code}
              </a>
              : <p> No country code</p>}
            </div>
          </div>
       
  );
};
export default TheNobelCard;