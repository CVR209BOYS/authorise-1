import React from "react";

export default function SignupMOdal({
  setOpenSin,
  setOpenSup,
  user,
  user2,
  setUser,
  setUser2,
}) {
  return (
    <div>
      <div className="bg-black text-white w-full h-screen">
        hfkjhashfhashhsdvsfhfiurfbv nansknvhriufiahdskjk
        <div
          onClick={() => {
            setOpenSup(false);
          }}
        >
          close
        </div>
      </div>
    </div>
  );
}
