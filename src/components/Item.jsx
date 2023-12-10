import { Box, Stack, IconButton, Divider, Checkbox } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"

const Item = ({
	item,
	handleDelete,
	setEditId,
	isLastItem,
	handleComplete,
}) => {
	const { id, name, quantity, completed } = item
	return (
		<Box>
			<Stack direction='row' alignItems='center' justifyContent='space-between'>
				<Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
					<Checkbox
						onChange={e => handleComplete(e.target.checked, id)}
						value={completed}
						checked={completed}
					/>
					<h3 style={{ color: completed ? "silver" : null }}>
						{name.at(0).toUpperCase() + name.slice(1).toLowerCase()}
					</h3>
					<p style={{ color: completed ? "silver" : null }}>
						<small>x{quantity}</small>
					</p>
				</Box>
				<Box sx={{ display: "flex", gap: "0.1rem", alignItems: "center" }}>
					<IconButton onClick={() => setEditId(id)}>
						<EditIcon color='success' />
					</IconButton>
					<IconButton onClick={() => handleDelete(id)}>
						<DeleteIcon color='error' />
					</IconButton>
				</Box>
			</Stack>
			{isLastItem ? null : <Divider />}
		</Box>
	)
}
export default Item
