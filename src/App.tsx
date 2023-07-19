
// example for material UI
import Country from './components/Country';
import Navbar from './components/navbar/Narbar';
export default function App() {
  return (

    <div className='flex justify-center flex-col items-center'>
      <Navbar/>              
      <h1 className='text-3xl bg-neutral-300 w-full justify-center flex mb-20 shadow-xl' >Getting Started</h1>
      <p>Select your Country</p>
      <Country/>
    </div>
  );
}
