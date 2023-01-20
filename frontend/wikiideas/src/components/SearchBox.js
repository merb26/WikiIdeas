
import Form from 'react-bootstrap/Form';
import './SearchBox.css'


function SearchingBox() {
  return (
    <div className="mainForm">
          <Form className="mb-2">
            <i className="fa-sharp fa-solid fa-eye"></i>
            <label className='label-search'>Busca un tema</label>  
            <input className="placeHolder" placeholder="Buscando. . ." /> 
            <button className='btn-search'>Buscar</button>
          </Form>  
    </div>
  );
}

export default SearchingBox;
