import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav class='flex bg-white flex-wrap items-center justify-between p-4'>
        <div class='lg:order-2 w-auto lg:w-1/5 lg:text-center'>
          Charlie Rabiller
        </div>

        <div class='d-flex navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5'>
          <Link to='/'>Home</Link>
          <Link to='/data'>
            <h2>All Data</h2>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
