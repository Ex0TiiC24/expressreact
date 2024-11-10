import {useState} from 'react'

function App() {
  const [display, setdisplay] = useState()
  return (
    <div class="h-screen w-full bg-zinc-800 flex justify-center items-center">
      <div><h1 class="text-white">hello</h1></div>
    </div>
  );
}

export default App;
