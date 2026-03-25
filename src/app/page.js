import Navigation from "./components/Navigation";
import Link from "next/link";

export default function Home() {
 
  return<div>
    <Navigation/>
    <h1>welcome to the wild Oasis</h1>
    <Link href={'/cabins'}>Explore luxury cabins</Link>
    </div>
  
}
