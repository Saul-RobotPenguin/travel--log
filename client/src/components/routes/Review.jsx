import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";

const Review = () => {
  const [review, setReview] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:3000/api/reviews/${id}`);
        console.log("params id", response);
        const result = response.data.review;
        setReview(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!review) {
      return <p> Loading..</p>;
    }
  }, [review]);

  const destroy = () => {
    axios({
      url: `http://localhost:3000/api/reviews/${id}`,
      method: "DELETE",
    })
      .then(() => setDeleted(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (deleted) {
      return navigate("/");
    }
  }, [deleted, navigate]);

  return (
    <Layout>
      <p>
        <h4>Location:</h4> {review.location}
      </p>
      <p>
        <h4>Cost Of Travel:</h4> {review.costOfTravel}
      </p>
      <p>
        <h4>Type Of Transportation:</h4> {review.typesOfTransportation}
      </p>
      <p>
        <h4> Do you recommend? </h4> {review.wouldRecommend}
      </p>
      <br />
      <img
        src={review.image}
        width="250px"
        height="250px"
        style={{ alignSelf: "center" }}
      />
      <br />

      <button onClick={() => destroy()}>Delete Review</button>

      <NavLink to={`/reviews/${id}/edit`}>
        <button>Edit</button>
      </NavLink>

      <NavLink to={`/reviews`}>
        <button>Back To All Reviews</button>
      </NavLink>
    </Layout>
  );
};

export default Review;
