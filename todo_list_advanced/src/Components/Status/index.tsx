import React from "react";

type Props = {
    key: number,
    status: string

}

const Status: React.FC<Props> = (props: Props) => {
    return (
        <div>
            {props.status}
        </div>
    )
}

export default Status