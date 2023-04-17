import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LogoutComponent from './logoutComponent';

const spans = [
  { text: 'Blog', link: '#' },
  { text: 'Contacto', link: '#' }
];

function HeaderLanding() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <div className="flex flex-row justify-between items-center border-[2px] border-black border-t-0 border-l-0 border-r-0">
      <div className="flex flex-row gap-12 items-center px-20">
        {spans.map((span) => (
          <span>
            <h1 className="text-black font-normal hover:font-bold text-md tracking-wide">
              {span.text}
            </h1>
          </span>
        ))}
      </div>
      {userInfo ? (
        <LogoutComponent />
      ) : (
        <div className="flex flex-row h-full">
          <Link
            to="/auth/login"
            className="bg-white hover:bg-[#FF6D60] px-8 py-6 border-[2px] border-black border-b-0 border-t-0 border-l-2 border-r-0 "
          >
            <h1 className="text-black font-bold text-[14px] tracking-wide">
              Iniciar sesión
            </h1>
          </Link>
          <Link
            to="/auth/register"
            className="bg-black hover:bg-[#FF6D60] px-8 py-6 border-[2px] border-black border-b-0 border-t-0 border-l-2 border-r-0 text-white hover:text-black"
          >
            <h1 className="font-bold text-[14px] tracking-wide">
              Regístrate gratis
            </h1>
          </Link>
        </div>
      )}
    </div>
  );
}

export default HeaderLanding;
