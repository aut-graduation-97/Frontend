import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { getInitMosts, putMostsVote } from "../../../../api/mosts-api";
import CustomError from "../../../SharedComponents/Elements/CustomError";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const DUMMY_FORM = (checkedId, checkHandler) => (
  <FormGroup>
    <FormControlLabel
      checked={checkedId === "1"}
      control={
        <Checkbox inputProps={{ accessKey: "1" }} onClick={checkHandler} />
      }
      label="بهترین"
    />
    <FormControlLabel
      checked={checkedId === "2"}
      control={
        <Checkbox inputProps={{ accessKey: "2" }} onClick={checkHandler} />
      }
      label="بدترین"
    />
    <FormControlLabel
      checked={checkedId === "3"}
      control={
        <Checkbox inputProps={{ accessKey: "3" }} onClick={checkHandler} />
      }
      label="خوب ترین"
    />
    <FormControlLabel control={<Checkbox />} label="1" />
  </FormGroup>
);

export default function VotingModal({ open, setOpen, name, sid }) {
  const [checkedId, setCheckedId] = useState("");

  const checkHandler = (event) => {
    setCheckedId(event.target.accessKey);
  };

  const { data, error, isFetching } = useQuery(["voting"], getInitMosts, {
    enabled: open,
  });

  const {
    data: responseData,
    error: responseError,
    isSuccess: responseIsSuccess,
    refetch: responseRefetch,
    isFetching: responseIsFetching,
  } = useQuery(["voting-result"], () => putMostsVote(checkedId, sid), {
    enabled: false,
  });

  // ONLINE - replace this warning with spinner and backdrop
  // if (isFetching) return <div>Spinner</div>;
  if (isFetching) toast.warn("در حال بارگذاری");
  if (error) toast.error(error.message);

  // -------
  if (responseError) return toast.error(error.message);
  if (responseIsSuccess) return toast.success(responseData.message);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={"modal"}>
          <Paper
            rounded={3}
            sx={{ display: "flex", flexDirection: "column", px: 4, py: 6 }}
          >
            <Typography variant="h6" component="h4" sx={{ mb: 4 }}>
              {`رای خود را برای ${name} ثبت کنید`}
            </Typography>

            {DUMMY_FORM(checkedId, checkHandler)}
            {/*<FormGroup>*/}
            {/*  {data.map((el, i) => (*/}
            {/*    <FormControlLabel*/}
            {/*      key={i}*/}
            {/*      checked={checkedId === el.id}*/}
            {/*      control={*/}
            {/*        <Checkbox*/}
            {/*          inputProps={{ accessKey: el.id }}*/}
            {/*          onClick={checkHandler}*/}
            {/*        />*/}
            {/*      }*/}
            {/*      label={el.name}*/}
            {/*    />*/}
            {/*  ))}*/}
            {/*</FormGroup>*/}

            <LoadingButton
              loading={responseIsFetching}
              variant="contained"
              onClick={() => responseRefetch()}
              sx={{ m: "auto", mt: 4 }}
            >
              ثبت رای
            </LoadingButton>
          </Paper>
        </Box>
      </Modal>
    </div>
  );
}
