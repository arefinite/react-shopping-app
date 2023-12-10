import { Box, Typography } from "@mui/material"

const Copyright = () => {
	return (
		<Box sx={{ textAlign: "center", mt:'1rem' }}>
			<Typography variant="caption" color='GrayText'>&copy; {new Date().getFullYear()} | All Rights Reserved. <br/> Design and Developed by Adnan Arefin</Typography>
		</Box>
	)
}
export default Copyright
