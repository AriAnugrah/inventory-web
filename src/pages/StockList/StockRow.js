import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from "reactstrap";

const StockRow = ({data, onDeleted}) => {
    return (
        <tr>
            <td> {data.id}</td>
            <td> {data.quantity} </td>

            <td>
                <td>
                    <Link to={`/stock/${data.id}/edit`}><Button color="primary"> Edit</Button></Link>
                </td>
                <td>
                    <Button onClick={onDeleted} color="danger">
                        Delete
                    </Button>
                </td>
            </td>
        </tr>
    )
}

export default StockRow
