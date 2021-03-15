
import './App.css';

const App = () => {
  interface User {
    username: string;
    id: number;
    size: number
  }

  type UserNameAndSize = Omit<User, 'id'>

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

  function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
  //          ^ = (parameter) obj: string
    } else {
      return obj;
    }
  }

  let abcd = ['sdfgsdfg', 'sdfbvdsfb', 'sdfgdsf']


  type num = 1 | 2 | 4 | 7
  type abc = Array<string>
  type ObjectWithNameArray = Array<{ name: string, age: number }>

  let arr: abc = ['a', 'c']
  let arr2: ObjectWithNameArray = [{name: "josh", age: 8}, {name: 'stu', age: 12}, {name: 'greg', age: 32}]

  function number(): string  {
    return "hello world"
  }

  const todd = new UserClass('todd', 2, 3)

  const mike: Partial<User> = {
    username: 'mike',
    id: 7
  }

  let jay = {
    username: "jay",
    id: 8
  }

  let martin: UserNameAndSize = {
    username: "martin",
    size: 4
  }

  let george: Omit<User, 'id'> = {
    username: 'george',
    size: 3
  }

  return (
    <h1>
      {mike.username}<br/>
      {jay.username}
      {todd.size}<br/>
      {wrapInArray(abcd)}
    </h1>
  )

}

export default App;
