import { useEffect, useState } from "react";
import { SelectClass } from "./SelectClass";

export const DashBoard = ({ incrementDays }) => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [currentForm, setCurrentForm] = useState(1);
  const [classType, setClassType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleClassChange = (selectedClass) => {
    setClassType(selectedClass);
  };

  const updateGreeting = (e) => {
    e.preventDefault();
    setGreeting(name && classType ? `Hello ${name}! I see you are a ${classType}` : "Please write in all fields");
    setCurrentForm((prevForm) => prevForm + 1);
  };

//   useEffect(() => {
//     // Update greeting after the state has been updated
//     setGreeting(name && classType ? `Hello ${name}! I see you are a ${classType}` : "Please write in all fields");
//   }, [name, classType]);

  const advanceToNextForm = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };

  return (
    <div className="h-full col-start-3 col-end-11 row-start-2 row-end-6 bg-white">
      <div className="flex flex-col items-center justify-center h-full">
        {currentForm === 1 && (
          <>
            <h1>Dungeons and dragons: ConScriptors</h1>
            <form className="flex flex-col">
              <label htmlFor="name" title="Name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="border border-black"
              />
      
<SelectClass advanceToNextForm={advanceToNextForm} setClassType={setClassType} handleClassChange={handleClassChange} />
              <button onClick={updateGreeting}>
                Done
              </button>
          
            </form>
          </>
        )}

        {currentForm === 2 && (
          <>
    
    <h3 className="text-3xl">{greeting}</h3>
          </>
        )}
      </div>
    </div>
  );
};
