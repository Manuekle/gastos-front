import React from 'react';

function LandingPage() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1 bg-black p-8">
        <h1 className="text-white font-md font-normal tracking-normal">
          My Expensive
        </h1>
        <hr className="border-zinc-800 border-1 my-2" />
        {/* <h1 className="text-sm text-zinc-100">Categories</h1> */}
        <button
          type="button"
          className="w-full flex flex-row justify-between items-center gap-2 border p-2 rounded-md"
        >
          <h1 className="text-white text-sm">Services</h1>
          <button className="text-white rotate-90" type="button">
            {'>'}
          </button>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
