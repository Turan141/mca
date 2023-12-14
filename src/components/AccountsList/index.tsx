import { Box } from "@mui/material";
import { useEffect, useState } from "preact/hooks";
import { AccountsMock } from "../../mockup/AccountsMock";
import { AccountsListItem } from "./AccountListItem";

export const AccountsList = () => {
    const [accounts, setAccounts] = useState<IAccountVO[]>([]);

    useEffect(() => {
        setAccounts(AccountsMock);
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection:'column',
                pt: 1,
                pb: 1,
            }}
        >
            {accounts.map((listItem, index) => (
                <AccountsListItem key={index} value={listItem} />
            ))}
        </Box>
    );
};
