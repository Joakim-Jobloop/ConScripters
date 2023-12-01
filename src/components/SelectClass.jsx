export const SelectClass = ({ setClassType }) => {
    const handleClassClick = (selectedClass) => {
        setClassType(selectedClass);
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-full gap-24">
        <div className="flex flex-col items-center gap-8">
          <h4 className="text-3xl">Select your class:</h4>
          <div className="flex gap-8 ">
            <button onClick={() => handleClassClick("Warrior")} className="">
              <img
                className="w-24 h-24 duration-500 hover:scale-110"
                src="/public/images/banjo_cat.webp"
                alt=""
              />
            </button>
            <button onClick={() => handleClassClick("Ranger")} className="">
              <img
                className="w-24 h-24 duration-500 hover:scale-110"
                src="/public/images/banjo_cat.webp"
                alt=""
              />
            </button>
            <button onClick={() => handleClassClick("Rogue")} className="">
              <img
                className="w-24 h-24 duration-500 hover:scale-110"
                src="/public/images/banjo_cat.webp"
                alt=""
              />
            </button>
            <button onClick={() => handleClassClick("Wizard")} className="">
              <img
                className="w-24 h-24 duration-500 hover:scale-110"
                src="/public/images/banjo_cat.webp"
                alt=""
              />
            </button>
            <button onClick={() => handleClassClick("Cleric")} className="">
              <img
                className="w-24 h-24 duration-500 hover:scale-110"
                src="/public/images/banjo_cat.webp"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    );
  };
