const Feedback = () => {
    return (
        <>

        <div className="container"></div>
        <h1>Feedback</h1>
        
            <form action="/feedback" method="post">  
                <input type="text" id="name" name="name" required/><br />
            
            </form>
        </>

    );
}

export default Feedback; 


