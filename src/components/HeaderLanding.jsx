import React from 'react';

const spans = [
  // { text: 'For Business', link: '#' },
  // { text: 'Como Funciona?', link: '#' },
  { text: 'Blog', link: '#' },
  { text: 'Contacto', link: '#' }
];

function HeaderLanding() {
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
      <div className="flex flex-row h-full">
        <button
          type="button"
          className="bg-white hover:bg-[#FF6D60] px-8 py-6 border-[2px] border-black border-b-0 border-t-0 border-l-2 border-r-0 "
        >
          <h1 className="text-black font-bold text-[14px] tracking-wide">
            Iniciar sesión
          </h1>
        </button>
        <button
          type="button"
          className="bg-black hover:bg-[#FF6D60] px-8 py-6 border-[2px] border-black border-b-0 border-t-0 border-l-2 border-r-0 text-white hover:text-black"
        >
          <h1 className="font-bold text-[14px] tracking-wide">
            Regístrate gratis
          </h1>
        </button>
      </div>
    </div>
  );
}

export default HeaderLanding;
