import { Grid, Skeleton } from "@mui/material";

const ListSkeleton = () => {
  return (
    <Grid container spacing={4}>
      {[1, 2, 3].map((item) => {
        return (
          <Grid key={item} item xs={12} sm={6} md={4}>
            <Skeleton variant="rectangular" animation="wave" sx={{ height: "250px", width: "auto", borderRadius: "10px" }} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ListSkeleton;
