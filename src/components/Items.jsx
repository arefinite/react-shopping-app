import Item from "./Item"
import { Box } from "@mui/material"

const Items = ({ items, handleDelete, setEditId, handleComplete }) => {
	return (
		<Box>
			{items.length ? (
				items.map((item, index) => (
					<Item
						item={item}
						key={item.id}
						handleDelete={handleDelete}
						setEditId={setEditId}
						isLastItem={index === items.length - 1}
						handleComplete={handleComplete}
					/>
				))
			) : (
				<p>There is no item in the list</p>
			)}
		</Box>
	)
}
export default Items
