import React, { useContext } from 'react';
import UpdateService from '../UpdateService/UpdateService';
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
import Swal from "sweetalert2";
import { DataContextApi } from '@/src/Context/DataContext';

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

const ManageServiceCard = ({ service, serviceRefetch }) => {
    const [expanded, setExpanded] = React.useState(false);
    const { services, details, image, _id } = service;
    const { baseUrl } = useContext(DataContextApi);

    const handelDelete = async (id) => {
        const confirmed = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (confirmed.isConfirmed) {
            const res = await fetch(`${baseUrl}/api/service/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (!data) {
                Swal.fire({
                    position: "center",
                    timerProgressBar: true,
                    title: data.message,
                    iconColor: "#ED1C24",
                    toast: true,
                    icon: "error",
                    showClass: {
                        popup: "animate__animated animate__fadeInRight",
                    },
                    hideClass: {
                        popup: "animate__animated animate__fadeOutRight",
                    },
                    showConfirmButton: false,
                    timer: 3500,
                });
            } else {
                Swal.fire({
                    position: "center",
                    timerProgressBar: true,
                    title: "Successfully Delete Service !",
                    iconColor: "#ED1C24",
                    toast: true,
                    icon: "success",
                    showClass: {
                        popup: "animate__animated animate__fadeInRight",
                    },
                    hideClass: {
                        popup: "animate__animated animate__fadeOutRight",
                    },
                    showConfirmButton: false,
                    timer: 3500,
                });
                serviceRefetch()
            }
        }
    };


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <section>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={services}
                    className="w-[100%] h-[200px] object-cover"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {services}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="Delete" onClick={() => handelDelete(_id)}>
                        <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
                    </IconButton>
                    <IconButton aria-label="Edite">
                        <UpdateService service={service} serviceRefetch={serviceRefetch}/>
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
                        <Typography paragraph>{details}</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </section>
    );
};

export default ManageServiceCard;