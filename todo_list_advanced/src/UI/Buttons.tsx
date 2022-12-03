import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
type Props = {
    onPress: () => void
}

export const AddButton = ({ onPress }: Props) => {
    return (
        <React.Fragment>
            <Button variant='outlined' onClick={onPress}>Добавить задачу</Button>
        </React.Fragment>
    )
}
export const RemoveButton = ({ onPress }: Props) => {
    return (
        <React.Fragment>
            <Button variant='contained' onClick={onPress} startIcon={<DeleteIcon />} />
        </React.Fragment>)
}