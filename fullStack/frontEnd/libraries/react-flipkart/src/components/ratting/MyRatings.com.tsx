import { Rating, Typography } from "@mui/material"

export const MyRatings:React.FC<{}>=()=>{
    return <div>
  
<Rating name="read-only" value={2} readOnly />
<Typography component="legend">Disabled</Typography>
<Rating name="disabled" value={3} disabled />
<Typography component="legend">No rating given</Typography>
<Rating name="no-value" value={null} />
    </div>
}