import type { NextPage } from 'next'
import Login from "./login";
import Registration from './Registration';

const Home: NextPage = () => {
  return (
    <div>
      <Registration/>
    </div>
  )
}

export default Home