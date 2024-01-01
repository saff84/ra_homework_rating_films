import './App.css';
import  Stars  from './components/Stars';

function App() {
  return (
    <div className='rating-list'>
      <Stars value = '1' />
      <Stars value = '2' />
      <Stars value = '3' />
      <Stars value = '4' />
      <Stars value = '5' />
    </div>
  );
}

export default App;
