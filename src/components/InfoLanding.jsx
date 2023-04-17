import React from 'react';

import businessman from '../assets/DrawIlustrations/happy-businessman.svg';
import timeman from '../assets/DrawIlustrations/time-is-money.svg';
import analysis from '../assets/DrawIlustrations/financial-analysis.svg';
import calculation from '../assets/DrawIlustrations/financial-calculation.svg';

function infoLanding() {
  return (
    <div className="grid grid-cols-12">
      <article className="flex flex-col justify-center px-40 col-span-6 gap-12 border-2 border-black border-t-0 border-l-0 bg-[#F9D949]">
        <span className="text-black text-7xl font-bold tracking-wide capitalize">
          Tus finanzas en un solo lugar
        </span>
        <p className="text-black text-xl font-normal tracking-wide text-justify">
          No te queda tiempo para hacer tus finanzas personales o de tu negocio?
          No te preocupes, nosotros te ayudamos a hacerlo. Con nuestra
          plataforma podrás llevar un control de tus finanzas de una manera
          fácil y rápida.
        </p>
        <section>
          <button
            type="button"
            className="bg-white hover:bg-[#F7D060] px-8 py-3 border-[2px] border-black"
          >
            <h1 className="text-black font-bold text-md tracking-wider">
              Empezar ahora
            </h1>
          </button>
        </section>
      </article>
      <article className="col-span-6 py-10 flex justify-center items-center border-2 border-black border-t-0 border-l-0 border-r-0 bg-[#98D8AA]">
        <img
          className="w-96 h-full object-contain"
          src={businessman}
          alt="businessman"
        />
      </article>
      <article className="col-span-12 bg-[#FF90E8]">
        <span className="flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0 mx-56 py-16 bg-white gap-8">
          <h1 className="text-4xl w-full text-center text-[#FFC900] tracking-wide border-2 border-black border-l-0 border-r-0 p-3 bg-black">
            ¿Por qué elegirnos?
          </h1>
          <img
            className="w-96 h-full object-contain"
            src={timeman}
            alt="timeman"
          />
          {/* <hr className="w-full border-2 border-black border-l-0 border-r-0 border-t-0" /> */}
          {/* <br /> */}
        </span>
      </article>
      <article className="col-span-6 flex border-2 border-black border-t-2 border-l-0 bg-[#F1F333]">
        <section className="grid grid-cols-2 w-full">
          <span className="col-span-1 border-2 gap-8 border-black border-l-0 border-r-2 border-t-0 border-b-0 p-6 flex justify-center">
            <h1 className="text-white text-4xl font-bold tracking-wide">01</h1>
            <p className="text-black text-xl font-bold tracking-wide">
              Podrás ver tus ingresos y egresos de una manera clara y sencilla.
              No te preocupes por los números, nosotros te ayudamos a
              entenderlos.
            </p>
          </span>
          <span className="col-span-1 flex justify-center">
            <img
              className="w-72 h-full object-contain p-6"
              src={calculation}
              alt="calculation"
            />
          </span>
        </section>
      </article>
      <article className="col-span-6 flex border-2 border-black border-t-2 border-l-0 border-r-0 bg-[#90A8ED]">
        <section className="grid grid-cols-2 w-full">
          <span className="col-span-1 border-2 border-black border-l-0 border-r-2 border-t-0 border-b-0 flex justify-center">
            <img
              className="w-72 h-full object-contain p-6"
              src={analysis}
              alt="analysis"
            />
          </span>
          <span className="col-span-1 flex justify-center p-6 gap-8">
            <p className="text-black text-xl font-bold tracking-wide">
              Observaras el comportamiento de tus finanzas a lo largo del tiempo
              para que puedas tomar mejores decisiones.
            </p>
            <h1 className="text-white text-4xl font-bold tracking-wide">02</h1>
          </span>
        </section>
      </article>
      <article className="col-span-12 flex flex-col gap-4 justify-center items-center py-12">
        <h1 className="w-full text-center font-normal text-xl">
          Integración con tu banco
        </h1>
        <h1>
          <span className="text-black text-7xl font-bold text-center">
            Próximamente
          </span>
        </h1>
        <p className="text-2xl text-center px-96">
          Podrás integrar tu cuenta bancaria para que puedas visualizar tus
          finanzas de una manera más rápida y sencilla.
        </p>
      </article>
    </div>
  );
}

export default infoLanding;
