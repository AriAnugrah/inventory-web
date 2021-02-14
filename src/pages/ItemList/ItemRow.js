import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from "reactstrap";

const ItemRow = ({data, onDeleted}) => {
    return (
        <tr>
            <td> {data.id}</td>
            <td> {data.name} </td>
            <td> {data.price} </td>
            <td>
                <td>
                    <Link to={`/item/${data.id}/edit`}><Button color="primary"> Edit</Button></Link>
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

export default ItemRow
