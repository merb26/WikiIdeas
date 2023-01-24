import CardItem from "./components/CardItem";
import SearchingBox from "./components/SearchBox";
import LastNews from "./components/LastNews";
import './App.css';

function App() {

  function callApi(keyword){
    console.log(`Llamando api con ${keyword} `)
  }
  return (
    <div className="App">
      <SearchingBox submitApi={callApi}/>
      <div className="mainSection">
        <LastNews />
        <div className="cardsContainer">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div> 
    </div>
  );
}

export default App;
