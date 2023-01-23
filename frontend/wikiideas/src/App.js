import SearchingBox from "./components/SearchBox";

function App() {

  function callApi(keyword){
    console.log(`Llamando api con ${keyword} `)
  }
  return (
    <div className="App">
      <SearchingBox submitApi={callApi}/>
    </div>
  );
}

export default App;
