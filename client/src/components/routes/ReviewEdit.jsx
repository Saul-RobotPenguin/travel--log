import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewForm from "../shared/ReviewForm";
import Layout from "../shared/Layout";
import axios from "axios";
const ReviewEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [review, setReview] = useState({
    location: "",
    costOfTravel: "",
    image: "",
    typesOfTransportation: "",
    wouldRecommend: "",
  });

  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:3000/api/reviews/${id}`);
        console.log("edit", response);
        setReview(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedReview = Object.assign(review, updatedField);
    setReview(editedReview);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3000/api/reviews/${id}`,
      method: "PUT",
      data: review,
    })
      .then(() => setUpdated(true))
      .catch(console.error);
  };
  useEffect(() => {
    if (updated) {
      return navigate(`/reviews/${id}`);
    }
  });

  return (
    <Layout>
      <ReviewForm
        review={review}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath={`/reviews/${id}`}
      />
    </Layout>
  );
};

export default ReviewEdit;
