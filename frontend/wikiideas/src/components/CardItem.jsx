import './CardItem.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';

function CardItem() {
  return (
    <Card className='card'>
      <Card.Img variant="top" src="./images/bichitos.webp"/>
      <Card.Body>
        <Card.Title>Capibara y sus crías</Card.Title>
        <Card.Text>
        Capibara y sus crías en el área de conservación Várzea do Rio Tietê en el estado de São Paulo, Brasil. El capibara (Hydrochoerus hydrochaeris) —también llamado carpincho, ronsoco o chigüiro— es un animal de la familia de los cávidos y el roedor viviente de mayor tamaño y peso del mundo. Los capibaras consiguen una longitud de 1 a 1,30 m, una altura a la espalda de 50 a 60 cm,​ y un peso medio de 50 kg en los machos y 61 en las hembras. Es una especie originaria de Sudamérica y habita en los bosques y sabanas tropicales hasta casi los 2000 m s.n.m. Se localiza en todos los países sudamericanos excepto en Chile.
        </Card.Text>
        <Button className="btn-notice">Ver mas</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;