import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";

const MediaMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-Content",
        }}
      >
        <Stack spacing={1}>
            <img src={el.img} alt={el.message} style={{maxHeight:210,borderRadius: "10px"}}/>
            <Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
                {el.message}
            </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default MediaMsg;
