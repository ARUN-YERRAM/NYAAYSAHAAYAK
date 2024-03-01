// import React, { useState } from 'react';
const Feedback = () => {
    return (
        <>
            <div>
                <h1>Feedback</h1>
                <form>
                    <textarea id="userFeedback" name="userFeedback" rows="" cols="₅0"></textarea><br />
                    <input type="submit" value="Submit" />
                    {/* alert("Thank you for submitting feedback ") */}
                </form>
            </div>
        </>
    );
}

export default Feedback;
