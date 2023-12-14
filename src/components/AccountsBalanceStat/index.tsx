import { useEffect, useState } from "preact/hooks"
import { mocked_currencies, ICurrency } from "./Mock"
import { VerticalIndicator } from "./VerticalBar"
import { Box } from "@mui/material"

const AccountsBalanceStat = () => {
  const [currencies, setCurrencies] = useState<ICurrency[]>([])
  const [maxValue, setMaxValue] = useState<number>(0)

  useEffect(() => {
    setCurrencies(mocked_currencies)

    const max = Math.max(...mocked_currencies.map((c) => c.value))
    setMaxValue(max > 0 ? max : 1)
  }, [])

  const height="100px";

  return (
    <Box
      sx={{
        display: "flex",
       // padding: '12px 12px 6px 12px',
        //justifyContent: "space-around",
        height: height,
        
        
        overflow:"auto",
        position:"relative",
       
        "&>div":{
        
          position:"absolute",
          display: "flex",
          gap:5,
          height:"100%"
         //alignItems:"center"  
        }
      }}
    ><div>
      {currencies.map((c, index) => (
        <Box key={index}>
          <VerticalIndicator height={(c.value / maxValue) * 100} label={c.name} />
        </Box>
      ))}
    </div></Box>
  )
}

export default AccountsBalanceStat
