import { Grid, Skeleton } from "@mui/material";

interface Props {
  list: any[];
}

const ListSkeleton = ({ list }: Props) => {
  return (
    <Grid container spacing={4}>
      {list.map((_, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Skeleton variant="rectangular" animation="wave" sx={{ height: "250px", width: "auto", borderRadius: "10px" }} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ListSkeleton;
