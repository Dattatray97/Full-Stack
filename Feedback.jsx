import React, { useState } from "react";

function Feedback() {
    const [message, setMessage] = useState("");

    return (
        <div>
            {!message && <h3>How would you rate our tech support?</h3>}
            <button onClick={() => setMessage("Thank you for your positive feedback!")} className="good">
                Good
            </button>
            <button onClick={() => setMessage("Thanks for your neutral feedback! We'll work to improve.")} className="new">
                Neutral
            </button>
            <button onClick={() => setMessage("We're sorry to hear that. We'll strive to do better!")} className="bad">
                Poor
            </button>
            {message && <h3>{message}</h3>}
        </div>
    );
}

export default Feedback;