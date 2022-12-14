import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
type Props = {
    onPress: () => void,
    type?: string
}

export const AddButton = ({ onPress, type }: Props) => {
    return (
        <React.Fragment>
            <Button variant='text' onClick={onPress}>Добавить {type}</Button>
        </React.Fragment>
    )
}
export const RemoveButton = ({ onPress }: Props) => {
    return (
        <React.Fragment>
            <Button variant='text' onClick={onPress} startIcon={<DeleteIcon />} />
        </React.Fragment>)
}
export const EditProjectButton = ({ onPress }: Props)=>{
    return (
        <React.Fragment>
            <Button variant='text' onClick={onPress} startIcon={<EditOutlinedIcon /> } />
        </React.Fragment>
    )
}