import React, { useState } from "react";
import { Menu, MenuItem, Stack } from "@mui/material";
import { DotsThreeVertical } from "phosphor-react";
 import { Message_options } from "../../../data";


const MessageOption = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DotsThreeVertical
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size={20}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((el) => (
            <MenuItem onClick={handleClick}>
              {el.title}
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};

export default MessageOption;
