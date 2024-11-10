import {useState,useEffect} from 'react'

function App() {
  const [display, setdisplay] = useState("none")

    // Function to fetch data
    const fetchData = () => {
      fetch("http://localhost:8000/api")
        .then(response => response.json())
        .then(data => {
          setdisplay(data);  // Update the state with fetched data
        })
        .catch(error => console.error("Error fetching data:", error));
    };
  
    // Fetch data on mount and then every 5 seconds
    useEffect(() => {
      fetchData();  // Fetch data once when the component mounts
  
      const interval = setInterval(() => {
        fetchData();  // Fetch data every 5 seconds
      }, 3000);  // Adjust the interval (5 seconds in this case)
  
      // Clean up interval on component unmount
      return () => clearInterval(interval);
    }, []);  

  const show = () => {
    if (display.users) {
      return display.users.map((user, i) => <p key={i}>{user}</p>);
    } else {
      return <p>Loading...</p>;
    }
  };

  return (
    <div class="h-screen w-full bg-zinc-800 flex justify-center items-center">
      <div class="text-white">
        {show()}

      </div>
    </div>
  );
}

export default App;
