import React, { useState } from "react";

function App() {

    const [name, firstName] = useState("")

    function setFirstName() {
        useState(firstName)
    }


    return (
        <div className="container">
            <h1>Hello {setFirstName} </h1>
            <form>
                <input name="fName" placeholder="First Name" />
                <input name="lName" placeholder="Last Name" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
