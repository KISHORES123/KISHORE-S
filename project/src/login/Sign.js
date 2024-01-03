import './sign.css';

function Sign() {
  return (
    <body>
      <marquee><h1><b>Online Grocery Store</b></h1></marquee>

    <div>
   <form>
       <b>
   </b>
   <box>
    <h1><b>SIGN UP</b></h1>
    <label><b>Enter Your GMAIL:</b>
      <input type = "text" required></input>
      </label>
      <br></br>
      <br></br>
    
      <label><b>Enter Your Password:</b>
        <input type ="password" required></input>
        </label>
        <br></br>
        <br></br>
    
        <label><b>Confirm Password:</b>
          <input type="password" required></input>
          </label>
          <br></br>  
          <br></br>
          <label><b>Enter Your Phonenumber:</b>
          <input type="phonenumber" required></input>
          </label>
          <br></br>  
          <br></br>

          <button>submit</button>
          
          </box>

   </form>
   
    </div>
  
    </body>
  );
}

export default Sign;