import React, { useEffect, useState, Suspense } from "react";

import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Stack,
  Card,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { NotificationManager } from "react-notifications";

const ReviewsList = React.lazy(() => import("./ReviewsList"));

const Review = () => {
  let reviewObj = localStorage.getItem("reviewObj");

  const [title, setTitle] = useState(() => {
    if (reviewObj) {
      const data = JSON.parse(reviewObj);
      return data?.title;
    }
    return "";
  });

  const [rating, setRating] = useState(() => {
    if (reviewObj) {
      const data = JSON.parse(reviewObj);
      return data?.rating;
    }
    return "";
  });

  const [description, setDescription] = useState(() => {
    if (localStorage.getItem("reviewObj")) {
      reviewObj = JSON.parse(localStorage.getItem("reviewObj"));
    }
    return reviewObj?.description || "";
  });

  const [reviews, setReviews] = useState(() => {
    if (localStorage.getItem("reviews")) {
      const savedReviews = localStorage.getItem("reviews");
      const parsedReviews = JSON.parse(savedReviews);
      return parsedReviews || [];
    }
    return [];
  });

  const handleSubmit = () => {
    const newReview = {
      title,
      rating,
      description,
    };
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setTitle("");
    setRating("");
    setDescription("");
  };

  const handleReset = () => {
    setTitle("");
    setRating("");
    setDescription("");
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };
  
  useEffect(() => {
    localStorage.setItem(
      "reviewObj",
      JSON.stringify({ title, rating, description })
    );
  }, [title, rating, description]);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);
  return (
    <Container maxWidth="sm" sx={{ marginBottom: 2 }}>
      <Card
        sx={{
          marginTop: 2,
          padding: 3,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <FormControl>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                Review Form
              </Typography>
            </Grid>
            <Grid item container>
              <Grid item xs={4}>
                <Typography variant="subtitle1" align="left" required>
                  Name
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  variant="outlined"
                  fullWidth
                  value={title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter the name"
                />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Rating</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  variant="outlined"
                  type="number"
                  fullWidth
                  value={rating}
                  required
                  onChange={(e) => {
                    const num = e.target.value;
                    if (num < 0) {
                      NotificationManager.error(
                        "Error!",
                        "Review can't be less than 0",
                        5000
                      );
                      return;
                    } else if (num > 5) {
                      NotificationManager.error(
                        "Error!",
                        "Review can't be greater than 5",
                        5000
                      );
                      return;
                    }
                    setRating(num);
                  }}
                  placeholder="Enter the rating"
                />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Description</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter the description"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <Button type="button" variant="outlined" onClick={handleReset}>
                  Reset
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </FormControl>
      </Card>
      <div>
        <h2>Reviews</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <ReviewsList reviews={reviews} handleDeleteReview={handleDeleteReview}  />
        </Suspense>
      </div>
    </Container>
  );
};

export default Review;
