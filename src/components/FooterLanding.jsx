import React from 'react';
import Github from '../assets/Icons/Github';

function FooterLanding() {
  return (
    <div className="col-span-12 bg-black grid grid-cols-2 py-20 px-16">
      <article className="col-span-1 flex flex-col gap-12">
        <h1 className="text-white font-normal text-5xl">
          Suscríbete para obtener consejos y tácticas para mejorar tu economía.
        </h1>
        <span className="flex items-center">
          <input
            type="text"
            placeholder="Correo electrónico"
            className="w-96 h-12 border-2 border-white border-l-0 border-r-0 border-t-0 rounded-l-md p-4"
          />
          <button
            type="button"
            className="w-32 h-12 bg-[#FF90E8] text-black font-bold rounded-r-md border-2 border-black border-l-2 border-r-0 border-t-0 border-b-0"
          >
            Suscribirse
          </button>
        </span>
        <span>
          <h1 className="text-white font-normal text-lg">
            © 2023 - Todos los derechos reservados
          </h1>
        </span>
      </article>
      <article className="flex flex-col gap-8 px-40 justify-between">
        <section className="flex justify-between gap-8">
          <span className="flex flex-col gap-3">
            <h1 className="text-white hover:text-[#FF90E8] font-normal text-md">
              Ayuda
            </h1>
            <h1 className="text-white hover:text-[#FF90E8] font-normal text-md">
              Blog
            </h1>
            <h1 className="text-white hover:text-[#FF90E8] font-normal text-md">
              Términos y condiciones
            </h1>
            <h1 className="text-white hover:text-[#FF90E8] font-normal text-md">
              Política de privacidad
            </h1>
          </span>
          <span className="flex flex-col gap-3">
            <h1 className="text-white font-normal text-2xl">Contacto</h1>
            <h1 className="text-white font-normal text-md">
              Tel: +51 987 654 321
            </h1>
            <h1 className="text-white font-normal text-md">
              Email:{' '}
              <a href="mailto: " className="text-[#FF90E8] font-bold">
                company@gmail.com
              </a>
            </h1>
          </span>
        </section>
        <section>
          <Github className="w-6 h-6 fill-white" />
        </section>
      </article>
    </div>
  );
}

export default FooterLanding;
