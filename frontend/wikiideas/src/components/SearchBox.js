import { useState } from 'react';
import './SearchBox.css'


function SearchingBox({submitApi}) {

  const [keyword, setKeyword] = useState('')

  function handleChange(e){
    const currentWord = e.target.value.trim()
    setKeyword(currentWord)
  }

  function handleClick() {
    //fetch de tipo get a api si es valor es != vacio
    submitApi(keyword)

  }

  return (
    <div className="searchForm">
          <input onChange={handleChange} className="placeHolder" placeholder="Buscar tema. . ." /> 
          <button onClick={handleClick} className='btn-search'>Buscar</button>
    </div>
  );
}


export default SearchingBox;
 