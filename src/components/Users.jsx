import { useState, useEffect } from 'react';
function Users() {
  // parisiusti ir sugeneruoti vartotojus is
  // https://dummyjson.com/users
  console.log('Users component created');

  const [usersArr, setUsersArr] = useState([]);

  let isLoading = usersArr.length === 0 ? true : false;

  async function getUsers() {
    const resp = await fetch('https://dummyjson.com/users');
    const data = await resp.json();
    console.log('data ===', data.users);
    setUsersArr(data.users); // inifinite loop if not in useEffect
  }
  // skirtas side efektam.
  // {} fn body
  // [] dependancy array - reiksmes kuriom pasikeitus is naujo pasileis efekto fn

  // toks useEffektas pasileis tik viena karta susikurus komponentui ir nesikartos
  useEffect(() => {
    console.log('startup use Effect ran');
    getUsers();
    // useEffect return fn pasileidzia kai sunaikinamas komponentas.
    return () => {
      console.log('cleanUp getUsers');
    };
  }, []);

  // toks useEffektas pasileis viena karta susikurus komponentui, ir pasikeitus usersArr reiksmei
  // useEffect(() => {}, [usersArr]);
  console.log('just be4 return of JSX');

  function deleteHandler() {
    console.log('delete');
  }

  return (
    <div>
      <h2>Users from db</h2>
      {isLoading && <h2>Loading...</h2>}

      <ul>
        {usersArr.map((uObj) => (
          <li onClick={() => deleteHandler(uObj.id)} key={uObj.id}>
            {uObj.firstName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
