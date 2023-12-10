import { useEffect, useState } from "react"
import bannerImg from "/banner.svg"
import { Typography, Box } from "@mui/material"
const Header = ({ items }) => {
	const [allCompleted,setAllCompleted] = useState(false)
	useEffect(() => {
		const validate = items.every(item => item.completed)
		items.length > 0 && validate ? setAllCompleted(true) : setAllCompleted(false)
	},[items])
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
			<Typography color='secondary' variant="h6">{ allCompleted && 'All Done'}</Typography>
			<Typography variant='h4' color='primary'>
				Shopping App
			</Typography>
			<img src={bannerImg} width={200} alt='' />
		</Box>
	)
}
export default Header
