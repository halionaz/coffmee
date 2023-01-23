import emptyCup from './emptyCup.svg';
import './App.css';
import Btn from './components/Btn';

function App() {
  return (
    <div className="App">
        <h1>나와 어울리는<br/>커피 찾기 테스트</h1>
        <img src={emptyCup} className="App-logo" alt="cup img logo" />
        <Btn text={`시작하기`}></Btn>
    </div>
  );
}

export default App;
