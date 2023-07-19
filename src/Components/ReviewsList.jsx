import React from "react";
import { Typography, Grid, Card, Button } from "@mui/material";

const ReviewsList = ({ reviews, handleDeleteReview }) => {
  if (!reviews.length) {
    return <p>No reviews available</p>;
  }

  return (
    <div>
      {reviews.map((review, index) => {
        if (!review.title) {
          return null;
        }
        return (
          <Card
            sx={{
              marginTop: 2,
              padding: 3,
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={6}>
                <Typography variant="h6" align="left" gutterBottom>
                  Name: {review.title}
                </Typography>
              </Grid>
              {review.rating && (
                <Grid item xs={6}>
                  <Typography variant="h6" align="left" gutterBottom>
                    Rating: {review.rating}
                  </Typography>
                </Grid>
              )}

              {review.description && (
                <Grid item xs={6}>
                  <Typography variant="h6" align="left" gutterBottom>
                    Description: {review.description}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteReview(index)}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Card>
        );
      })}
    </div>
  );
};

export default ReviewsList;
