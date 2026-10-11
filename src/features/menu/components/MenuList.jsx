import DishCard from "./DishCard";


function MenuList({ dishes }) {

  if (!dishes.length) {
    return (
      <p style={styles.message}>
        No dishes match your search.
      </p>
    );
  }


  return (

    <div style={styles.grid}>

      {dishes.map((dish) => (

        <DishCard
          key={dish.id}
          dish={dish}
        />

      ))}

    </div>

  );
}


const styles = {

  grid: {

    display: "grid",

    gridTemplateColumns: "repeat(3,1fr)",

    gap: "20px",

    padding: "40px"

  },


  message: {

    textAlign: "center",

    color: "white",

    fontSize: "20px",

    marginTop: "50px"

  }

};


export default MenuList;