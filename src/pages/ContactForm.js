export default function ContactForm() {
    //styles for the form
    const container = {
      width: "500px",
      margin: "0 auto",
      padding: "20px",
      alignItems: "center",
    };
    const formStyles = {
      display: "flex",
      flexDirection: "column",
      // alignItems: "center",
      rowGap: "5px",
      margin: '0 auto',
      width: '100%',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor:'#f2f2f2'
    }
    const inputStyles= {
      width: "100%",
      height: "40px",
      borderRadius: "10px",
      border: "1px solid #000000",
      padding: "10px",
      margin: "10px",
    };
    const buttonStyles = {
      width: "100%",
      height: "40px",
      borderRadius: "10px",
      border: "1px solid #000000",
      padding: "10px",
      margin: "10px",
      backgroundColor: "#000000",
      color: "white",
    };
    const labelStyles = {
      width: "20%",
      // height: "40px",
      textAlign: "center",
      borderRadius: "10px",
      border: "1px solid #000000",
      padding: "10px",
      // margin: "5px",
      backgroundColor: "#000000",
      color: "white",
    };
  
    return (
      <div style={container}>
        <div style={formStyles}>
          <label style={labelStyles}>Name:</label>
          <input style={inputStyles} type="text" name="name" />
          <label style={labelStyles}>Email:</label>
          <input style={inputStyles} type="text" name="email" />
          <label style={labelStyles}>Message:</label>
          <input style={inputStyles} type="text" name="message" />
          <button style={buttonStyles} type="submit">
            Submit
          </button>
        </div>
      </div>
    );
  }