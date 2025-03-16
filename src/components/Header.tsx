import { Menu } from 'lucide-react';

function Header() {
  return (
    <header className='w-full h-[50px] flex items-center px-4'>
      <button className='text-white'>
        <Menu size={32} />
      </button>
    </header>
  );
}

export default Header;
