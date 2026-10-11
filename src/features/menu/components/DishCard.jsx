function DishCard({ dish }) {

  return (

    <div style={styles.card}>

      <h3>
         {dish.name}
      </h3>


      <p>
        Price: Rs.{dish.price}
      </p>


      {dish.available === false && (
        <p style={styles.sold}>
          Sold Out
        </p>
      )}


    </div>

  );
}


const styles = {

   card: {

    background: "rgba(255,255,255,0.1)",

    padding: "20px",

    borderRadius: "15px",

    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",

    color: "white",

    transition: "0.3s",

    textAlign: "center"

  },


  sold: {

    color: "#ff6b6b",

    fontWeight: "bold"

  }

};


export default DishCard;