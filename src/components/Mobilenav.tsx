import { CircleUserRound, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet'
import { Separator } from '@radix-ui/react-separator'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import MobilenavLinks from './MobilenavLinks'

function Mobilenav() {
    const {loginWithRedirect, isAuthenticated, user}=useAuth0();
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='text-orange-500'></Menu>
        </SheetTrigger>
        <SheetContent className='space-y-3'>
            <SheetTitle>
                {isAuthenticated ? (<span className='flex items-center font-bold gap-2'>
                    <CircleUserRound className='text-orange-500'></CircleUserRound>
                    {user?.email}
                </span>) : (<span>Welcome to UrbanEats.com!</span>)}
                
            </SheetTitle>
            <Separator />
            <SheetDescription className='flex flex-col gap-4'>
                {isAuthenticated ? (<MobilenavLinks />) : (<Button className='flex-1 font-bold bg-orange-500' onClick={()=>loginWithRedirect()}>
                    Log In
                </Button>)}
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default Mobilenav
