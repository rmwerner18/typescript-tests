
import './App.css';

const App = () => {
  interface User {
    username: string;
    id: number;
  }

  class UserClass {
    username: string 
    id: number 
    size: number 


    constructor(username: string, id: number, size: number) {
      this.username = username;
      this.id = id;
      this.size = size
    }
  }

  type num = 1 | 2 | 4 | 7
  type stringArray = Array<string>
  type ObjectWithNameArray = Array<{ name: string }>

  let arr: Array<string> = ['a', 'c']
  let arr2: ObjectWithNameArray = [{name: "josh"}, {name: 'stu'}, {name: 'greg'}]

  function number(): num  {
    return 4
  }

  const todd = new UserClass('todd', 2, 3)

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
      {todd.size}
    </h1>
  )

}

export default App;
