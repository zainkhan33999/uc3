import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className="w-full bg-[#212529] p-3 cursor-pointer text-md text-white text-secondry px-5 hidden md:block">
        <div className="flex flex-wrap justify-between items-center">
        <section>

            <div className="flex gap-5 flex-wrap">
              <div className="flex gap-2 items-center">
                <p>
                  <FaMapLocationDot   className=""/>{" "}
                </p>
                <p>Find A Location</p>
              </div>

              <div className="flex gap-2 items-center">
                <p>
                  <FaPhoneAlt className="" />
                </p>
                <p>+92 336 3332468</p>
              </div>
              <div className="flex gap-2 items-center">
                <p>
                  <MdEmail  className=""/>{" "}
                </p>
                <p>info@uc3gulshantown.com</p>
              </div>
      
          </div>
        </section>
        <section>
        <div className="flex gap-5  flex-wrap">
              <div className="flex  items-center">
                <p>
                <FaFacebookSquare className=""  size={30} />
                </p>
               
              </div>

              <div className="flex  items-center">
                <p>
                  <FaSquareXTwitter className=""  size={30} />
                </p>
                
              </div>
              <div className="flex items-center">
                <p>
                  <FaLinkedin className=""   size={30}/>{" "}
                </p>
              </div>
              <div className="flex items-center">
                <p>
                  <FaInstagramSquare className=""  size={30} />{" "}
                </p>
              </div>
      
          </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default Header;
