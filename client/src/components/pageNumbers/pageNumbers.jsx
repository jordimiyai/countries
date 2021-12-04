import React from "react";

export default function PageNumbers(props) {
  let { countriesPerPage, allCountries, grid } = props;
  let pageNumbers = [1];
  let totalPages = Math.ceil((allCountries.length-10)/countriesPerPage)
  for (let i = 2; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

   
    
    return(
        <div>
           {pageNumbers.length ? <div>
            {pageNumbers.map((num)=> <button key={num} onClick={()=>grid(num)}>{num}</button>)}
           </div>:
           <p>something went wrong</p>}
        </div>
    )

}
