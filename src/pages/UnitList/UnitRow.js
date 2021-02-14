import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";

const UnitRow = ({ data, onDeleted }) => {
  return (
    <tr>
      <td> {data.id} </td>
      <td> {data.code} </td>
      <td> {data.description} </td>
      <td>
          <td>
                  <Link to={`/unit/${data.id}/edit`} ><Button color="primary"> Edit</Button></Link>
          </td>
          <td>
              <Button onClick={onDeleted}  color="danger">
                  Delete
              </Button>
          </td>
      </td>
    </tr>
  )
}

export default UnitRow
