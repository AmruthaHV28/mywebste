import { Box, Paper, Toolbar } from "@mui/material"
import { MyTabs } from "../../components/tabs/MyTabs.com"

export const Lessons:React.FC<{}>=()=>{
    return <Box>
        <Paper elevation={3}>
            <Toolbar/>
        <MyTabs/>
        
        </Paper>
        
        
       </Box>
}