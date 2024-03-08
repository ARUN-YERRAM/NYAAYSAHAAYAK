const Details = () => {
    return ( 
        <>
        Appointment Booked Successfully

        
app.get('/appointments', async (req, res) => {
  try {
    const allAppointments = await Appointment.find();
    res.send(allAppointments);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
        </>
     );
}
 
export default Details;