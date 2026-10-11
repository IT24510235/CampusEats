import { useState } from "react";
import MenuList from "../components/MenuList";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";


function MenuPage() {

  const [query, setQuery] = useState("");

  const debounced = useDebounce(query, 400);


  const { data: dishes, isLoading, error } = useFetch("/menu.json");


  // Loading state
  if (isLoading)
    return <p style={styles.message}>Loading menu...</p>;


  // Error state
  if (error)
    return (
      <p style={styles.message}>
        Could not load menu: {error}
      </p>
    );


  // Search filtering
  const filtered = dishes.filter((dish) =>
    dish.name
      .toLowerCase()
      .includes(debounced.toLowerCase())
  );


  return (

    <div>

      <div style={styles.searchContainer}>

        <input
          style={styles.search}
          type="text"
          placeholder="                       Search dishes...                      "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

      </div>


      <MenuList dishes={filtered} />


    </div>

  );

}



const styles = {


  searchContainer: {

    display: "flex",

    justifyContent: "center",

    marginTop: "30px",

  },


  search: {

    width: "380px",

    padding: "14px 18px",

    borderRadius: "12px",

    border: "1px solid rgba(255,255,255,0.3)",

    background: "rgba(255,255,255,0.1)",

    color: "white",

    fontSize: "16px",

    outline: "none",

    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",

  },


  message: {

    textAlign: "center",

    color: "white",

    marginTop: "40px",

    fontSize: "18px"

  }


};


export default MenuPage;