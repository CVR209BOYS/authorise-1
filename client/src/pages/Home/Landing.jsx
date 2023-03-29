import { useState } from "react";
import b1 from "../../images/b1.png";
import b2 from "../../images/b2.jpeg";
import b3 from "../../images/b3.jpeg";
import Nav from "../Common/Nav";
import SIdebar from "./SIdebar";
import Footer from "../Common/Footer";
import WorkSpace from "./WorkSpace";
function Landing() {
  const [open, setOpen] = useState(true);
  console.log(document.getElementById("sidebar"));
  return (
    <div>
      <Nav />
      
      <SIdebar open={open} setOpen={setOpen} />

      <WorkSpace open={open} />

      <Footer />

      {/* <div className="h-screen bg-[#f9f8f6] w-[100%] text-black flex space-x-4 justify-end">
          <div className="flex  w-[90%] h-[40rem] ">
            <div className="w-[70%] h-5/6 bg-white ml-[-350px] mt-[100px] m-20">
              <div>fkjgkjjngvsa;</div>
            </div>
            <div className=" w-[100%] flex m-auto">
              <div className="mt-[100px] h-[500px] w-[90%] border-black flex justify-between ">
                <div className="mt-20">
                  <div
                    className="h-[300px] w-[210px] bg-black  rounded-t-3xl bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url(${b1})`,
                    }}
                  ></div>
                  <div>title</div>
                  <div>manas</div>
                </div>
                <div className="mt-20">
                  <div>title</div>
                  <div>manas</div>
                  <div
                    className="h-[300px] w-[210px] bg-black  rounded-b-3xl bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url(${b2})`,
                    }}
                  ></div>
                </div>
                <div className="mt-20">
                  <div
                    className="h-[300px] w-[210px] bg-black my-auto rounded-t-3xl bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url(${b3})`,
                    }}
                  ></div>
                  <div>title</div>
                  <div>manas</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
}

export default Landing;
