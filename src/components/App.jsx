import React, { useState } from "react";

function App() {

    const [firstName, setFirstName] = useState("")

    function handleFirstName() {
        useState(setFirstName)
    }


    return (
        <div className="container">
            <h1>Hello {firstName} </h1>
            <form>
                <input name="fName" placeholder="First Name" value={handleFirstName} />
                <input name="lName" placeholder="Last Name" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
