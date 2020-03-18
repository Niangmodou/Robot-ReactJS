import React from 'react';

const Searchbox = ({searchfield,searchchange}) => {

    return (
        <div className = "pa2">
            <input 
            className="pa3 ba b--green bg-lightest-blue " 
            type="search" 
            placeholder="Search Robots" 
            onChange={searchchange}>
            </input>
        </div>
    );

}

export default Searchbox;