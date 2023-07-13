
import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


export function MyNavBar() {

  const storedToken = localStorage.getItem('token');
  const storedName = localStorage.getItem('name');
  const storedIsAdmin = localStorage.getItem('isAdmin');
  const storedLoggedIn = localStorage.getItem('loggedIn');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedName = localStorage.getItem('name');
    const storedIsAdmin = localStorage.getItem('isAdmin');
    const storedLoggedIn = localStorage.getItem('loggedIn');
  });


  const [show, setShow] = useState(false);
  
  const handleShow = () => {
    setShow(true);
    document.getElementById("wrapper").style.display = "none"    
  };

  const handleHide = () => {
    setShow(false);
    document.getElementById("wrapper").style.display = "block"
  };

  return (
      <>
      {show && (        
        <Navbar style={styles.nav} id="navbar">
          <div>
                <button  onClick={handleHide} >X</button>
          </div>     
              <Nav.Item >
              <Nav.Link as={NavLink} to="/">
                  Home
              </Nav.Link>
              </Nav.Item>
        
              <Nav.Item>
              <Nav.Link as={NavLink} to="/services">
                  Services
              </Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link as={NavLink} to={`/drinks`}>
                Drinks
              </Nav.Link>
              </Nav.Item>

              {storedIsAdmin? (
              <>
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/admin">
                    ADMIN
                  </Nav.Link>
                </Nav.Item>
              </>
              ) : (
                <></>
              )}

              {localStorage.getItem('token') ? (
                <>                     
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/logout">
                    Logout
                  </Nav.Link>
                </Nav.Item>
                </>
              ) : (
                <>
                {/* <Nav.Item>
                  <Nav.Link as={NavLink} to="/register">
                    Register
                  </Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/login">
                    Login
                  </Nav.Link>
                </Nav.Item>
                </>
              )}     
            </Navbar>            
            )            
            }
            <div style={styles.nav} id='wrapper'>
              <img 
              style={styles.icon}
              src="..\src\image\icon2.png" width={"50px"}
              onClick={handleShow}
                />
            </div>

              <Navbar style={styles.nav} id="navbar2">
       
     
                <Nav.Item >
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
                </Nav.Item>
        
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/services">
                    Services
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={NavLink} to={`/drinks`}>
                  Drinks
                </Nav.Link>
                </Nav.Item>
               {storedIsAdmin? (
                <>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/admin">
                      ADMIN
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <></>
              )}
              
              {localStorage.getItem('token') ? (
                <>                           
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/logout">
                      Logout
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  {/* <Nav.Item>
                    <Nav.Link as={NavLink} to="/register">
                      Register
                    </Nav.Link>
                  </Nav.Item> */}
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/login">
                      Login
                    </Nav.Link>
                  </Nav.Item>
                </>
              )}     
            </Navbar>
      </>  
  );
}


const styles = {
  nav: {
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  minWidth: "100%",
  zIndex: "1",
  backgroundColor: "black",
  transform: "translateX(0)",
  },
  
  icon: {
    cursor: "pointer",
  }
}



 
    

 

