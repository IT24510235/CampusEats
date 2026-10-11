import { useParams, Link } from "react-router-dom";

function DishDetailPage() {
  const { id } = useParams(); // from /dish/:id

  return (
    <div>
      <h2>Dish Details</h2>

      <p>Selected dish ID: {id}</p>

      <Link to="/">← Back to menu</Link>
    </div>
  );
}

export default DishDetailPage;