import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="min-h-16">
          <div className="flex justify-between items-center flex-col md:flex-row py-10">
            <h2 className="text-4xl font-bold text-white">
              Subscribe Our Newslatter
            </h2>
            <form className="md:w-1/3 w-full mt-8 md:mt-0 relative">
              <input
                placeholder="Enter Your Email"
                className="bg-white py-4 px-4 rounded shadow-md w-full"
                type="text"
              />
              <button className="bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div>
              <span className="text-xl text-white font-bold">audiophile</span>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur atque recusandae necessitatibus et doloremque
                inventore.
              </p>
              <div className="flex items-center gap-8 mt-5">
                <Facebook
                  className="bg-white text-black rounded-md p-2"
                  size={40}
                />
                <Twitter
                  className="bg-white text-black rounded-md p-2"
                  size={40}
                />

                <Youtube
                  className="bg-white text-black rounded-md p-2"
                  size={40}
                />

                <Instagram
                  className="bg-white text-black rounded-md p-2"
                  size={40}
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4">Pages</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Contacts</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4">Category</h2>
              <ul>
                <li>
                  <Link to="/">Monitors</Link>
                </li>
                <li>
                  <Link to="/">GPUs</Link>
                </li>
                <li>
                  <Link to="/">Laptops</Link>
                </li>
                <li>
                  <Link to="/">PowerSupply</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold my-4">Contacts</h2>
              <p>v.Humnyshche, Volyn Oblast</p>
              <p>+14882-2888-1337</p>
              <p>+14882-2888-7331</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center py-4 text-white">
        <p>Copyright © 2025 JujunJujuneiro</p>
      </div>
    </footer>
  );
}

export default Footer;
