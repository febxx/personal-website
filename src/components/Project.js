import React from "react";
import img from '../assets/projects/digilib.png';

function Hero() {
	return (
		<div className="mb-16">
        <h1 className="font-cond font-bold text-gray-800 dark:text-white text-xl px-2 md:px-0 py-2"><span
            className="text-primary" id="projects">#</span> Recently Project</h1>

        <div className="mb-6 grid lg:grid-cols-3 gap-2 container px-3 lg:px-0">
          <div className="bg-gray-100 dark:bg-gray-800" href="">
            <div className="p-4 text-gray-600 dark:text-white rounded-md">
              <img className="rounded-md mb-4" src={img} alt="CUBICASH"/>
              <h1 className="mb-1 font-semibold text-lg">Digital Library Poliwangi</h1>
              <p className="mb-4 text-gray-600 dark:text-gray-100">Digital Library (Digilib) Poliwangi adalah sistem informasi dan pencatatan data Buku, Proposal dan Laporan Proyek Akhir Mahasiswa pada Politeknik Negeri Banyuwangi.</p>
              <div className="">
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5 mr-1.5">PHP</span>
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5 mr-1.5">SLiMS CMS</span>
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5 mr-1.5">MySQL</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800" href="">
            <div className="p-4 text-gray-600 dark:text-white rounded-md">
              <img className="rounded-md mb-4" src={img} alt="CUBICASH"/>
              <h1 className="mb-1 font-semibold text-lg">Digital Library Poliwangi</h1>
              <p className="mb-4 text-gray-600 dark:text-gray-100">Digital Library (Digilib) Poliwangi adalah sistem informasi dan pencatatan data Buku, Proposal dan Laporan Proyek Akhir Mahasiswa pada Politeknik Negeri Banyuwangi.</p>
              <div className="">
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5 mr-1.5">PHP</span>
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5 mr-1.5">SLiMS CMS</span>
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5 mr-1.5">MySQL</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800" href="">
            <div className="p-4 text-gray-600 dark:text-white rounded-md">
              <img className="rounded-md mb-4" src={img} alt="CUBICASH"/>
              <h1 className="mb-1 font-semibold text-lg">Digital Library Poliwangi</h1>
              <p className="mb-4 text-gray-600 dark:text-gray-100">Digital Library (Digilib) Poliwangi adalah sistem informasi dan pencatatan data Buku, Proposal dan Laporan Proyek Akhir Mahasiswa pada Politeknik Negeri Banyuwangi.</p>
              <div className="">
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5 mr-1.5">PHP</span>
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5 mr-1.5">SLiMS CMS</span>
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5 mr-1.5">MySQL</span>
              </div>
            </div>
          </div>
        </div>
        <a href="https://haecal.my.id/projects">
          <button className="text-gray-700 dark:text-gray-300 text-center w-full focus:outline-none">--- Lebih banyak
            ---</button>
        </a>
      </div>
	);
}

export default Hero;
