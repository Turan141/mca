import { BaseScreen } from "../screens/bases/BaseScreen";
import { AccountHead } from "../components/AccountHead";
import { CircleButton } from "../components/CircleButton";
import { Deposit } from "../assets/icons/Deposit";
import { Exchange } from "../assets/icons/Exchange";
import { Send } from "../assets/icons/Send";
import { Box } from "@mui/material";
import BottomMenu from "../components/BottomMenu";
import { REQ_BRIDGE_WINDOW_OPEN } from "../bridge/Bridge";

export const ScreenStart = () => {

    

    return (
        <BaseScreen head={<AccountHead />} bottom={<BottomMenu />}>
            <Box sx={{
                display:"flex",
                padding:3,
                justifyContent:"space-between"
            }}>
                <CircleButton onClick={()=>{REQ_BRIDGE_WINDOW_OPEN.request("1")}} icon={<Deposit/>} title="Deposit"/>
                <CircleButton icon={<Exchange/>} title="Exchange"/>
                <CircleButton icon={<Send/>} title="Send"/>
                <CircleButton icon={<Deposit/>} title="Details"/>

            </Box>
        </BaseScreen>
    );
};
