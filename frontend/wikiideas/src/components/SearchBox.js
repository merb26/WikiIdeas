import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SearchBox.css'


function SearchingBox() {
  return (
    <div className="mainForm">
          <Form className="mb-2">
            <i className="fa-sharp fa-solid fa-eye"></i>
            <label>Busca un tema</label>  
            <input className="placeHolder" placeholder="Buscando. . ." /> 
            <Button className='btn-search'>Buscar</Button>
          </Form>  
    </div>
  );
}

export default SearchingBox;
