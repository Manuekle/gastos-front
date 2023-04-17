/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FacebookLogo, TwitterLogo } from '@phosphor-icons/react';

function socialMedia() {
  return (
    <>
      <div className="w-[400px] relative">
        <button
          type="button"
          className="bg-[#4267B2] w-full rounded-lg border border-black flex flex-row gap-2 justify-center items-center"
        >
          <FacebookLogo size={24} weight="bold" className="fill-white" />
          <h1 className="text-white text-md font-normal py-3">
            Conectate con Facebook
          </h1>
        </button>
      </div>
      <div className="w-[400px] relative">
        <button
          type="button"
          className="bg-[#4A99E9] w-full rounded-lg border border-black flex flex-row gap-2 justify-center items-center"
        >
          <TwitterLogo size={24} weight="fill" className="fill-white" />

          <h1 className="text-white text-md font-normal py-3">
            Conectate con Twitter
          </h1>
        </button>
      </div>
    </>
  );
}

export default socialMedia;
