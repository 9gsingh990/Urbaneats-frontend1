
import { Link } from 'react-router-dom'
import Mobilenav from './Mobilenav'
import Mainnav from './Mainnav'

function Header() {
  return (
    <div className='border-b-2 border-b-orange-500 py-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to="/" className='text-3xl font-bold tracking-tight text-orange-500'>
            UrbanEats.com
        </Link>
        <div className='md:hidden'>
            <Mobilenav></Mobilenav>
        </div>
        <div className='hidden md:block'>
            <Mainnav/>
        </div>
      </div>
    </div>
  )
}

export default Header
