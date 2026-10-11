import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>

      <h1>
        CampusEats Dashboard
      </h1>

      <div>
        <NavLink style={styles.link} to="/">
          Menu
        </NavLink>

        <NavLink style={styles.link} to="/order">
          Place Order
        </NavLink>
      </div>

    </nav>
  );
}


const styles = {

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    background: "#111827",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  },

  link: {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
    fontSize: "17px"
  }

};


export default Navbar;