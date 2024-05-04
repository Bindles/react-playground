//rfc
// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

//rafc
// export const a = () => {
//   return (
//     <div>a</div>
//   )
// }


const App = () => {
  const name = 'Nick'
  const x = 10
  const y = 20
  const names = ['John', 'Adam', 'Steve']
  const loggedIn = true;
  const styles = {
    color: 'red'
  }

  // if (loggedIn) {
  //   return (
  //     <h1>Hello Member</h1>
  //   )
  // }

  return (
    <>
    <div className='text-5xl'>
      <h1>App</h1>
      <img src='src/assets/luxcar-01e.png'></img>
      <p style={{ color: 'red', fontsize: '24px'}}>Hello {name}</p>
      <p>the sum of {x} and {y} is {x+y}</p>
      <ul>
        {names.map((name, index) => 
        <li key={index}>{name}({index}) </li>
        )}
      </ul>
      <ul>
        {names.map(name => <li>{name}</li>)}
      </ul>
      <ul>
        {names.map(name => <li key={name}>{name}</li>)}
      </ul>
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
      {loggedIn && <h1>Hello Member</h1>}
    </div>
    </>
  )
}

export default App

// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }
