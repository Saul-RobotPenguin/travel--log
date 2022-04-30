import { Link } from "react-router-dom";
import "./ReviewForm.css";

const ReviewForm = ({ review, handleSubmit, handleChange, cancelPath }) => {
  return (
    <div className="container">
      <label>Make Changes</label>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="location"
          defaultValue={review.location}
          name="location"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          placeholder="cost of travel"
          defaultValue={review.costOfTravel}
          name="costOfTravel"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          placeholder="image"
          defaultValue={review.image}
          name="image"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          placeholder="what transportation"
          defaultValue={review.typesOfTransportation}
          name="typesOfTransportation"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          placeholder="Would You Recommend"
          defaultValue={review.wouldRecommend}
          name="wouldRecommend"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button type="submit">Submit</button>

        <Link to={cancelPath}>
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default ReviewForm;
