import {FormControl,TextField, Button,Stack} from '@mui/material'
import { useEffect, useState } from 'react'

const AddItem = ({handleAdd,editId,items,handleUpdate}) => {
  const [item, setItem] = useState('')
  const handleChange = (e) => {
    setItem(e.target.value)
  }

  useEffect(() => {
    if (editId) {
      const foundItem = items.find(item => item.id === editId)
      setItem(foundItem.name)
    }
  }, [editId, items])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (editId) {
      handleUpdate(editId, item)
    } else {
        if (item) {
					const newItem = {
						id: crypto.randomUUID(),
						name: item.toLowerCase(),
						completed: false,
						quantity: 1,
					}
					handleAdd(newItem)
				}
    }
    setItem('')
  }
  return (
		<form onSubmit={handleSubmit}>
			<FormControl fullWidth>
        <Stack spacing={1} direction='row'>
          <TextField
            size='small'
            required
            fullWidth
						label='Enter Item Name'
						value={item}
						onChange={handleChange}
					/>
					<Button variant='contained' type='submit' color='primary'>
						{editId ? 'Update' : 'Add'}
					</Button>
				</Stack>
			</FormControl>
		</form>
	)
}
export default AddItem