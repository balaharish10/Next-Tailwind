import {HomeIcon,BadgeCheckIcon,LightningBoltIcon,SearchIcon,CollectionIcon,UsersIcon} from '@heroicons/react/outline';
import HeaderItem from "./HeaderItem";
import Image from 'next/image'
function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon}/>
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
        <HeaderItem title="COLLECTION" Icon={CollectionIcon}/>
        <HeaderItem title="SEARCH" Icon={SearchIcon}/>
        <HeaderItem title="ACCOUNT" Icon={UsersIcon}/>
      </div>
      <Image 
      className="object-contain"
      src="https://image.shutterstock.com/image-vector/flag-barcelona-official-color-background-260nw-1791540650.jpg"
      width={200}
      height={100}
      />
</header>
    )
}

export default Header
