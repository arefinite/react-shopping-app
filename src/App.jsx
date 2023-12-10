import { Container, Stack } from "@mui/material"
import { Header, Copyright, Items, AddItem } from "./components"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
	const [items, setItems] = useState([])
	const [editId, setEditId] = useState("")

	const handleAdd = newItem => {
		const updateItems = [...items]
		const itemIndex = updateItems.findIndex(item => item.name === newItem.name)
		if (itemIndex === -1) {
			updateItems.push(newItem)
		} else {
			updateItems[itemIndex].quantity++
		}
		setItems(updateItems)
		toast.success("Item Added Successfully")
	}

	const handleDelete = id => {
		setItems(prev => [...prev].filter(item => item.id !== id))
		toast.error("Item Deleted Successfully")
	}

	const handleUpdate = (id, name) => {
		setItems(prev =>
			prev.map(item => (item.id === id ? { ...item, name } : item))
		)
		toast.success("Item Updated Successfully")
		setEditId(null)
	}

	const handleComplete = (status, id) => {
		setItems(prev =>
			prev.map(item => (item.id === id ? { ...item, completed: status } : item))
		)
		toast.success("Status Changed Successfully")
	}

	return (
		<>
			<Container maxWidth='xs' className='shadow'>
				<Stack spacing={3}>
					<Header items={items} />
					<AddItem
						handleAdd={handleAdd}
						handleUpdate={handleUpdate}
						editId={editId}
						items={items}
					/>
					<Items
						items={items}
						handleDelete={handleDelete}
						setEditId={setEditId}
						handleComplete={handleComplete}
					/>
				</Stack>
			</Container>
			<Container maxWidth='xs'>
				<Copyright />
			</Container>
			<ToastContainer
				position='top-right'
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
			/>
		</>
	)
}
export default App
