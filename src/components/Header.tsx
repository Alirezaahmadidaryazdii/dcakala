import Image from "next/image";

// icon mui
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Link from "next/link";

const Header = () => {
  return ( 
    <header className="bg-primary">
      <div className="flex flex-column align-items-center justify-center gap-2 lg:gap-8 p-3" dir='rtl'>
        <div className="text-white hidden">
          <MenuIcon fontSize="large"/>
        </div>
        <div>
          <Image src={'/assets/images/logo.png'} alt="" width={100} height={100} />
        </div>
        <div className="rounded-[25px] p-2 flex justify-center bg-white flex-1 mx-3">
          <input placeholder="جستجو در آی سی پلاس" type="text" className="px-2 w-[80%] bg-transparent border-none focus:outline-none"  />
          <SearchIcon className="mr-auto text-primary" />
        </div>
        <div className="hidden md:flex gap-2 justify-center align-items-center text-white my-auto">
          <p>021-721195</p>
          <PhoneIcon />
        </div>
        <Link href={'/login'} className="gap-1 bg-white rounded-[20px] p-2 justify-center hidden md:flex">
          <AccountCircleIcon color="success" />
          <p className="hidden lg:block text-sm text-accent-des">وارد شوید</p>
        </Link>
        <Link href={'/cart'} className="bg-white p-2 rounded-[10px] hidden md:flex">
          <LocalGroceryStoreIcon color="success" />
        </Link>
      </div>
    </header>
   );
}
 
export default Header;