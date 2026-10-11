import { useState } from "react";

function OrderPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dish: "",
    qty: 1,
  });

  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);


  function validate(v) {
    const e = {};

    if (v.name.trim().length < 2)
      e.name = "Name too short";

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email))
      e.email = "Enter a valid email";

    if (v.dish.trim().length === 0)
      e.dish = "Dish name is required";

    if (Number(v.qty) < 1)
      e.qty = "Qty must be ≥ 1";

    return e;
  }


  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }


  function handleSubmit(e) {
    e.preventDefault();

    const found = validate(form);

    setErrors(found);

    if (Object.keys(found).length === 0) {
      setDone(true);
    }
  }


  if (done) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Order Confirmed ✓</h2>

          <p style={styles.text}>
            Thanks, <strong>{form.name}</strong>!
          </p>

          <p style={styles.text}>
            Your order has been received successfully.
          </p>
        </div>
      </div>
    );
  }


  return (
    <div style={styles.container}>

      <form style={styles.card} onSubmit={handleSubmit}>

        <h2 style={styles.title}>
          Place Order
        </h2>


        <label style={styles.label}>
          Name
        </label>

        <input
          style={styles.input}
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        {errors.name && (
          <span style={styles.error}>
            {errors.name}
          </span>
        )}



        <label style={styles.label}>
          Email
        </label>

        <input
          style={styles.input}
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        {errors.email && (
          <span style={styles.error}>
            {errors.email}
          </span>
        )}



        <label style={styles.label}>
          Dish
        </label>

        <input
          style={styles.input}
          name="dish"
          value={form.dish}
          onChange={handleChange}
          placeholder="Enter dish name"
        />

        {errors.dish && (
          <span style={styles.error}>
            {errors.dish}
          </span>
        )}



        <label style={styles.label}>
          Quantity
        </label>

        <input
          style={styles.input}
          type="number"
          name="qty"
          value={form.qty}
          onChange={handleChange}
          min="1"
        />

        {errors.qty && (
          <span style={styles.error}>
            {errors.qty}
          </span>
        )}



        <button style={styles.button} type="submit">
          Place Order
        </button>


      </form>

    </div>
  );
}



const styles = {

  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },


  card: {
    width: "380px",
    padding: "35px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },


  title: {
    textAlign: "center",
    color: "white",
    marginBottom: "15px",
  },


  label: {
    color: "#ddd",
    fontSize: "15px",
  },


  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #555",
    background: "#222",
    color: "white",
    outline: "none",
  },


  button: {
    marginTop: "15px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#4CAF50",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },


  error: {
    color: "#ff6b6b",
    fontSize: "13px",
  },


  text: {
    color: "#ddd",
    textAlign: "center",
  }

};


export default OrderPage;