import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
type Props = {
    onPress: () => void, 
    type?:string
}

export const AddButton = ({ onPress, type }: Props) => {
    return (
        <React.Fragment>
            <Button variant='outlined' onClick={onPress}>Добавить {type}</Button>
        </React.Fragment>
    )
}
export const RemoveButton = ({ onPress  }: Props) => {
    return (
        <React.Fragment>
            <Button variant='contained' onClick={onPress} startIcon={<DeleteIcon />} />
        </React.Fragment>)
}