import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: (props) => {
    if (props.type === "confirm")
      return {
        borderLeft: "5px solid #c9302c",
      };
    if (props.type === "recover")
      return {
        borderLeft: "5px solid #28a745",
      };
    else
      return {
        borderLeft: "5px solid #ccc",
      };
  },

  title: {
    fontSize: 18,
    marginBottom: 5,
  },

  count: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

const HighlightCard = ({ title, count, type }) => {
  const styles = useStyles({ type });
  return (
    <Card className={styles.wrapper}>
      <CardContent>
        <Typography component="p" variant="body2" className={styles.title}>
          {title}
        </Typography>
        <Typography component="span" variant="body2" className={styles.count}>
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HighlightCard;
