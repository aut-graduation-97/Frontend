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
import LoadingProgress from "../../../SharedComponents/UI/LoadingProgress";

const DUMMY_FORM = (checkHandler) => (
  <FormGroup onChange={checkHandler}>
    <FormControlLabel
      control={<Checkbox inputProps={{ accessKey: "1" }} />}
      label="بهترین"
    />
    <FormControlLabel
      control={<Checkbox inputProps={{ accessKey: "2" }} />}
      label="بدترین"
    />
    <FormControlLabel
      control={<Checkbox inputProps={{ accessKey: "3" }} />}
      label="خوب ترین"
    />
    <FormControlLabel control={<Checkbox />} label="1" />
  </FormGroup>
);

export default function VotingModal({ open, setOpen, name, sid }) {
  const [checkedIds, setCheckedIds] = useState([]);

  const { data, error, isFetching } = useQuery(["voting"], getInitMosts, {
    enabled: false,
    // enabled: open,
  });

  const {
    data: responseData,
    error: responseError,
    isSuccess: responseIsSuccess,
    refetch: responseRefetch,
    isFetching: responseIsFetching,
  } = useQuery(
    ["voting-result"],
    () =>
      putMostsVote(
        JSON.stringify({
          tarin_id: checkedIds,
        }),
        sid
      ),
    {
      enabled: false,
    }
  );

  const checkHandler = (event) => {
    const id = event.target.accessKey;
    if (event.target.checked) {
      if (checkedIds.includes(id)) return;
      setCheckedIds((prev) => [...prev, id]);
    } else {
      setCheckedIds(checkedIds.filter((item) => item !== id));
    }
  };

  const submitHandler = () => {
    if (checkedIds.length === 0) {
      toast.error("لطفا حداقل یک مورد را انتخاب کنید");
      return;
    }
    responseRefetch();
  };

  if (isFetching) return <LoadingProgress />;
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

            {DUMMY_FORM(checkHandler)}
            {/*<FormGroup onClick={checkHandler}>*/}
            {/*  {data.map((el, i) => (*/}
            {/*    <FormControlLabel*/}
            {/*      key={i}*/}
            {/*      checked={checkedId === el.id}*/}
            {/*      control={<Checkbox inputProps={{ accessKey: el.id }} />}*/}
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
