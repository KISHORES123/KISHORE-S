import './login.css';

function Login() {
  return (
    <body>

    <div>
   <form>
       <b>
   </b>
   <box>
    <h1> Online Grocery Store</h1>
    

    <h1><b> LOGIN </b></h1>
    <label><b>Enter Your UserName:</b>
      <input type = "text" required></input>
      </label>
      <br></br>
      <br></br>
    
      <label><b>Enter Your Password:</b>
        <input type ="password" placeholder="password" id="password" required></input>
        </label>
        <br></br>
        <br></br>
    
        <label><b>Confirm Password:</b>
          <input type="password" required></input>
          </label>
          <br></br>  
          <br></br>

          <button>submit</button>
          <p>don't have an account signup</p>
          </box>

   </form>

    </div>
  
    </body>
  );
}

export default Login;