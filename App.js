import React, { useEffect, useState } from "react";
import data from "./data.json"; // Adjust the path as needed

const App = () => {
  const [formStyles, setFormStyles] = useState({
    formClass: "",
    inputClass: "",
    buttonClass: ""
  });

  useEffect(() => {
    // Assuming data.json has a structure like { formStyles: { ... } }
    setFormStyles(data.formStyles);
  }, []);

  return (
    <div>
      <form className={formStyles.formClass}>
        <input type="text" placeholder="Username" className={formStyles.inputClass} />
        <input type="password" placeholder="Password" className={formStyles.inputClass} />
        <button type="submit" className={formStyles.buttonClass}>Submit</button>
      </form>
    </div>
  );
};

export default App;
