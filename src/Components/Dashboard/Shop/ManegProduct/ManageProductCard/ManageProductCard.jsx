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
import useShopHooks from "@/src/Hooks/useShopHooks/useShopHooks";
import Link from "next/link";
import UpdateProduct1 from "../UpdateProduct/UpdateProduct";

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

const ManageProductCard = ({ product }) => {
  const [expanded, setExpanded] = React.useState(false);
  const {
    productName,
    productPrice,
    productImage,
    productBrand,
    productCategory,
    productDescription,
    productType,
    _id,
  } = product;
  const { handelDelete } = useShopHooks();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        image={productImage}
        alt={productName}
        className="w-[100%] h-[200px] object-cover"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productName}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Delete" onClick={() => handelDelete(_id)}>
          <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
        </IconButton>
        <IconButton aria-label="Edite">
          <UpdateProduct1 product={product} />
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
          <Typography paragraph>$ {productPrice}</Typography>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Typography paragraph>{productBrand}</Typography>
            <Typography paragraph>{productCategory}</Typography>
            <Typography paragraph>{productType}</Typography>
          </div>
          <hr />
          <Typography paragraph>{productDescription}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ManageProductCard;
