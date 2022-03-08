import React from "react";

const App = () => {
  return (
    <div class="w-full max-w-xs">
      <div>
        <h1>Hitung Harga Akhir</h1>
      </div>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="hargaAwal"
          >
            Harga Awal
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="hargaAwal"
            type="number"
            placeholder="Masukkan harga awal..."
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="ppn">
            PPN
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ppn"
            type="number"
            placeholder="Masukkan ppn..."
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="diskon"
          >
            Diskon
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="diskon"
            type="number"
            placeholder="Masukkan diskon"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Hitung
          </button>
        </div>
        <div>
          <h2>Harga Akhir : </h2>
        </div>
      </form>
    </div>
  );
};

export default App;
