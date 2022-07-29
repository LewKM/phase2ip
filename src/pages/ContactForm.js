import "../css/ContactForm.css"
export default function ContactForm() {
  
    return (
     <div>
      <div id="contactform">
        <div className="container">
          <div className="formStyles">
            <label className="labelStyles">Name:</label>
            <input className="inputStyles" type="text" name="name" />
            <label className="labelStyles">Email:</label>
            <input className="inputStyles" type="text" name="email" />
            <label className="labelStyles">Message:</label>
            <input className="inputStyles" type="text" name="message" />
            <button className="buttonStyles" type="submit">
              Submit
            </button>
          </div>
        </div>
        <div id="para">
        <h2>About Us</h2>
        <p>
      If you're looking for a forex trading platform that allows you to share your ideas with other traders, then you've come to the right place. Our platform is designed to provide a collaborative environment for traders to share their ideas and strategies, and to learn from each other.
        </p>
      <p>
We believe that by sharing our ideas and strategies, we can all become better traders. Our platform is easy to use and provides all the tools you need to succeed in the forex market. So why not join us today and start sharing your ideas with other traders?
      </p>
        </div>
      </div>
      <img 
    src={process.env.PUBLIC_URL + "/How-to-get-to-NTSA-offices-Upper-Hill-from-Nairobi-CBD-by-Bus-or-Matatu.jpg"}
          alt="chart"/>
     </div>
    );
  }