import { Paper } from "@mui/material";
import React from "react";
import Status from '../Components/Status';

enum statuses { planned = "Запланировано", inProgress = "В работе", done = "Выполнено" }


const Projects: React.FC = () => {

    return (
        <Paper>
            {Object.keys(statuses).map((status, index) => {
                const statusProps = {
                    status,
                    "key": index
                }
                return <> <Status {...statusProps}>{status}</Status></>
            })
            }
        </Paper>
    )
}
export default Projects
