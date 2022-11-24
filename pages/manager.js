import Link from 'next/link';
import footer from './footer'
import NavBar from './navbar';

export default function Manager() {
  return (
        <>
           Manager
        </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/hello`)
  const data = await res.json()
  console.log(data);
  // Pass data to the page via props
  return { props: { data } }
}