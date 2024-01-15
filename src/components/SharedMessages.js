import { Box, Grid, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { UpdateSidebarType } from '../redux/slices/app';
import {useTheme} from '@mui/material/styles'
import { CaretLeft, X } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import { SHARED_DOCS, SHARED_LINKS } from '../data';
import LinkMsg from './Conversation/MsgTypes/LinkMsg';
import DocMsg from './Conversation/MsgTypes/DocMsg';

const SharedMessages = () => {
    const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{width: 320, height: "100vh"}}>
      <Stack sx={{height: "100%"}}>
      <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction="row"
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared Messages</Typography>
            
          </Stack>
        </Box>
        <Tabs sx={{px: 2, pt: 2}} value={value} onChange={handleChange} centered>
            <Tab label="Media"/>
            <Tab label="Links"/>
            <Tab label="Docs"/>
        </Tabs>

        {/* body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={value === 1 ? 1 : 3}
        >
            {
                (()=>{
                    switch (value){
                        case 0:
                            // Imges
                            return <Grid container spacing={2}>
                                {
                                    [0,1,2,3,4,5,6,7].map((el) =>{
                                      return <Grid item xs={4}>
                                            <img src={faker.image.avatar()} alt={faker.name.firstName()}/>
                                        </Grid>
                                    })
                                }

                            </Grid>
                            
                        case 1:
                            // Links
                            return SHARED_LINKS.map((el) => <LinkMsg el={el} />);
                        case 2:
                            // Docs
                            return SHARED_DOCS.map((el) => <DocMsg el={el}/>)
                    }

                })()
            }
        </Stack>

      </Stack>
    </Box>
  )
}

export default SharedMessages
