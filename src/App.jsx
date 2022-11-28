import './App.css';
import Clock from './components/Clock';
import Counter from './components/counters/Counter';
import MainTitle from './components/MainTitle';
import Title from './components/Title';
import Users from './components/Users';

function App() {
  return (
    <div className='App container'>
      {!showUsers && <Clock />}
      <button onClick={() => setShowUsers(!showUsers)}>toggle Users</button>
      <MainTitle />

      {/* <Title>Events and Hooks</Title> */}
      {/* <Counter /> */}

      {!showUsers && <Counter>Push ups</Counter>}
      <Counter initValue='40' />
    </div>
  );
}

export default App;
