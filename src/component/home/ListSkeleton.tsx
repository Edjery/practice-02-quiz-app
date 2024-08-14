import { Grid, Skeleton } from "@mui/material";

interface ListSkeletonProps {
  count: number;
  height?: string;
  width?: string;
  variant?: "text" | "circular" | "rectangular";
  borderRadius?: string;
}

const ListSkeleton = ({
  count,
  height = "250px",
  width = "auto",
  variant = "rectangular",
  borderRadius = "10px",
}: ListSkeletonProps) => {
  return (
    <Grid container spacing={4}>
      {Array.from({ length: count }).map((_, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Skeleton variant={variant} animation="wave" sx={{ height, width, borderRadius }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListSkeleton;
