import { Box, Button, Grid, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { addUser } from "../../api/admin-api";
import { toast } from "react-toastify";

export default function AddUserForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const sidRef = useRef();
  let newUser = {};

  const {
    data,
    refetch: send,
    status,
    isFetching,
  } = useQuery({
    queryKey: ["addUser"],
    queryFn: () => addUser(newUser),
    enabled: false,
  });

  const addUserHandler = (event) => {
    event.preventDefault();

    newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      student_id: sidRef.current.value,
    };

    send();
  };

  if (status !== "loading" && status !== "idle") {
  }
  if (status === "success") {
    toast.success("کاربر با موفقیت اضافه شد!");
  }
  if (status === "error") {
    toast.error(data?.message ? data.message : "خطا در افزودن کاربر جدید! ");
  }

  return (
    <Box>
      <Grid container>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <TextField
            sx={{ m: 2, width: "80%", mt: 4 }}
            color={"warning"}
            id="outlined-multiline-static"
            label="Group Add - not implemented yet"
            multiline
            placeholder={"JSON Array"}
            rows={7}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <TextField
            inputRef={nameRef}
            sx={{ m: 2, width: "80%" }}
            id="standard-basic"
            label="Full Name"
            variant="standard"
          />
          <TextField
            inputRef={sidRef}
            sx={{ m: 2, width: "80%" }}
            id="standard-basic"
            label="Student ID"
            variant="standard"
          />
          <TextField
            inputRef={emailRef}
            sx={{ m: 2, width: "80%" }}
            id="standard-basic"
            label="Email"
            variant="standard"
          />
          <LoadingButton
            onClick={addUserHandler}
            sx={{ py: 1, m: 2, width: "50%" }}
            endIcon={<PersonAddIcon sx={{ mx: 1 }} />}
            loading={isFetching}
            loadingPosition="start"
            variant="contained"
          >
            Add User
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
}
