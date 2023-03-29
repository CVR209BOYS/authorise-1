function Sidebar({ open }) {
  return (
    <div>
      <div className="w-[390%] h-screen bg-[#948d7a] text-white sticky top-[50px] z-10 ">
        <h1>side barrrrr</h1>
        <h1>side barrrrr</h1>
        <h1>side barrrrr</h1>
        <h1>side barrrrr</h1>
        <h1>side barrrrr</h1>
        <h1>side barrrrr</h1>
        <h1>side barrrrr</h1>
        <h1>side barrrrr</h1>
        <h1>side barrrrr</h1>
        <h1>side barrrrr</h1>
        <h1>side barrrrr</h1>
        <h1>side barrrrr</h1>
        <h1>side barrrrr</h1>

        <div>
          <button
            onClick={() => {
              open[0](true)
              open[1](false)
              open[2](false)
            }}
          >
            1
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              open[0](false)
              open[1](true)
              open[2](false)
            }}
          >
            2
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              open[0](false)
              open[1](false)
              open[2](true)
            }}
          >
            3
          </button>
        </div>

       
      </div>
    </div>
  );
}

export default Sidebar;
