// import React, { useState } from 'react';
const Feedback = () => {
    return (
        <>
        <h1>FeedBack</h1>
        <form>
        <textarea id="userFeedback" name="userFeedback" rows="4" cols="50"></textarea><br>
        <input type="submit" value="Submit">
        </form>
        </>
    );
}

export default Feedback;