import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
type Props = {
    onPress: () => void
}

export const AddButton = ({onPress}:Props) => {
    return (
        <div>
            <Button variant='outlined' onClick ={onPress}>Добавить задачу</Button>
        </div>
    )
}
export const RemoveButton =({onPress}:Props)=> {
    return <div>
        <Button variant ='contained' onClick ={onPress} startIcon={<DeleteIcon />} /> 
    </div>
}