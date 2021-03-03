
import './App.css';

const App = () => {
  interface User {
    username: string;
    id: number;
  }

  const mike: User = {
    username: 'mike',
    id: 7
  }

  let jay = {
    username: "jay",
    id: 8
  }

  return (
    <h1>
      {mike.username}<br/>
      {jay.username}
    </h1>
  )

}

export default App;
