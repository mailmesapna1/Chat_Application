import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/search";
import { MagnifyingGlass } from "phosphor-react";
import { CallElement } from "../../components/CallElement";
import { MembersList } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      {/* Title */}
      <DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>
      {/* Content */}
      <DialogContent>
        <Stack spacing={2}>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <Stack direction="row" alignItems="center" spacing={5}>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Stack>
          </Search>
        </Stack>
        {/* Call List */}
        {MembersList.map((el) => <CallElement {...el} />)}

        </Stack>
        
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;
