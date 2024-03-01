// import React, { useState } from 'react';
const Feedback = () => {
    return (
        <>
            <div>
                <h1>Feedback</h1>
                <form>
                    <textarea id="userFeedback" name="userFeedback" rows="4" cols="50"></textarea><br />
                    <input type="submit" value="Submit" onclick="showThankYouMessage()"/>
                    {/* alert("Thank you for submitting feedback ") */}
                </form>

                <div id="thankYouMessage" style="display: none;"></div>
            </div>
        </>
    );
}

export default Feedback;
