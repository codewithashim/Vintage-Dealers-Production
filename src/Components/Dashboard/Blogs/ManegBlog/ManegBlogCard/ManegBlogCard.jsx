import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";
import UpdateBlog from "../UpdateBlog/UpdateBlog";
import useBlogs from "@/src/Hooks/useBlogs/useBlogs";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ManegBlogCard = ({ blog }) => {
  const [expanded, setExpanded] = React.useState(false);
  const { blogTitle, blogImage, blogContent, blogAutho, _id } = blog;
  const { handelDelete } = useBlogs();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        image={blogImage}
        alt={blogTitle}
        className="w-[100%] h-[200px] object-cover"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {blogTitle}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Delete" onClick={() => handelDelete(_id)}>
          <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
        </IconButton>
        <IconButton aria-label="Edite">
          <UpdateBlog blog={blog} />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <hr />

          <Typography paragraph> {blogContent}</Typography>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Typography paragraph>{blogAutho}</Typography>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ManegBlogCard;
