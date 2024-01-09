import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import Timeline from './MsgTypes/Timeline'
import TextMsg from './MsgTypes/TextMsg'
import MediaMsg from './MsgTypes/MediaMsg'
import ReplyMsg from './MsgTypes/ReplyMsg'
import LinkMsg from './MsgTypes/LinkMsg'
import DocMsg from './MsgTypes/DocMsg'

const Message = () => {
  return (
    <Box p={3}>
        <Stack spacing={3}>
            {
                Chat_History.map((el) => {
                    switch (el.type) {
                        case "divider" :
                            // timeline msg
                            return <Timeline el={el}/>;
                        case "msg":
                            switch (el.subtype) {
                                case "img":
                                    // img msg
                                    return <MediaMsg el={el}/>;
                                case "doc":
                                    // document msg
                                    return <DocMsg el={el} />;
                                case "link":
                                    // link msg
                                    return <LinkMsg el={el} />;
                                case "reply":
                                    // reply msg
                                    return <ReplyMsg el={el} />;
                                default: 
                                // text msg
                                    return <TextMsg el={el} />;
                            }
                            break;
                        default:
                            return <> </>;
                    }
                })
            }

        </Stack>
    </Box>
  )
}

export default Message
