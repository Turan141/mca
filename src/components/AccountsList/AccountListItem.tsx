import { Avatar, Box, Typography } from "@mui/material";
import { currencySymbols } from "../../mockup/AccountsMock";

declare interface AccountsListItemProps {
    value: IAccountVO;
}
  

export const AccountsListItem = ({ value }: AccountsListItemProps) => {
    return (
        <Box
            sx={{
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
                gap: "16px",
                pr: 2,
                pl: 2,
                color: "#000000",
            }}
        >
            <Avatar
                sx={{ width: "32px", height: "32px" }}
                // srcSet={`https://flagcdn.com/w40/${value.CURRENCY.toLowerCase()}.png 2x`}
                src={`https://wise.com/public-resources/assets/flags/rectangle/${value.CURRENCY.toLowerCase()}.png`}
            />
            <Box
                sx={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    height: "100%",
                    display: "flex",
                    gap: "16px",
                    borderBottom: "1px solid #DADADA",
                    pt: 2,
                    pb: 2,
                }}
            >
                <Box>
                <Typography
                    sx={{
                        overflow: "hidden",
                        maxLines: 2,
                        lineHeight: "20px",
                        //fontFamily: "SF Pro Text",
                    }}
                >
                    {value.CURRENCY}
                </Typography>
                <Typography
                    sx={{
                        overflow: "hidden",
                        maxLines: 2,
                        lineHeight: "20px",
                        //fontFamily: "SF Pro Text",
                    }}
                >
                    account
                </Typography>
                </Box>
               
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "baseline",
                        marginLeft: "auto",
                    }}
                >
                    <Typography
                        sx={{
                            whiteSpace: "normal",
                            overflow: "hidden",
                            maxLines: 2,
                            fontSize: "20px",
                           // fontFamily: "SF Pro Text",
                        }}
                    >
                        {(value.BALANCE + "").split(".")[0]}.
                    </Typography>
                    <Typography
                        sx={{
                            whiteSpace: "normal",
                            overflow: "hidden",
                            maxLines: 2,
                            fontSize: "14px",
                            //fontFamily: "SF Pro Text",
                        }}
                    >
                        {(value.BALANCE + "").split(".")[1]}
                    </Typography>
                    <Typography
                        sx={{
                            paddingLeft: "8px",
                            whiteSpace: "normal",
                            overflow: "hidden",
                            maxLines: 2,
                            fontSize: "20px",
                            //fontFamily: "SF Pro Text",
                        }}
                    >
                    {currencySymbols[value.CURRENCY] || '--'}
                    </Typography>

                </Box>
            </Box>
        </Box>
    );
};
