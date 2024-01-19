import React, { useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { CallLogs, ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import { SimpleBarStyle } from "../../components/Scrollbar";
import CreateGroup from "../../sections/main/CreateGroup";
import { CallLogElement } from "../../components/CallElement";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };



  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant="h5">Call Logs</Typography>
            </Stack>
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
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="subtitle2" component={Link}>
                Start Conversation
              </Typography>
              <IconButton onClick={() => {
                setOpenDialog(true);
              }}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              spacing={2}
              direction="column"
              sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}
            >
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2.4}>
                  
                  {/* Call Logs */}
                  {CallLogs.map((el)=><CallLogElement {...el} /> )}
                  
                  
                </Stack>
                
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog}/>}
      
    </>
  );
};

export default Call;


