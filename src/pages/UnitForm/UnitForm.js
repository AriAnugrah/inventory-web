import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { findById, save } from "../../actions/unit"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faSave} from '@fortawesome/free-solid-svg-icons'
import {Button, Input, Label} from "reactstrap";
import Container from "../../components/container"
import success from "../../components/Alert/success";

const UnitForm = ({ error, isLoading, findById, unit, savedUnit, save }) => {
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false)
    const [data, setData] = useState({})
    const history = useHistory();

    useEffect(() => {
        if (id) {
            findById(parseInt(id))
        }

    }, [id, findById])

    useEffect(() => {

        if (id && unit) {
            setData({
                ...unit
            })
        }
    }, [id, unit])

    useEffect(() => {

        console.log(savedUnit)
        if(savedUnit) {
            history.push('/units')
            success()
        }
    }, [savedUnit, history])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        save(data)
        // history.push('/units')
    }

    if (redirect === true) {
        return <Redirect to="/units" />
    }

    return (
        <Container error={error}>
            <div className="offset-1">
                <h3>Unit Form</h3>
            </div>
            <div className="container">
                <div className="card col-8 offset-2 mt-5">
                    <div className="card-body">
                { !isLoading ?
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Input onChange={handleChange} type="text" value={data?.id || ''} name="id" hidden={true} />

                            <Label htmlFor="code" sm={5} size="lg">Code</Label><br/>
                            <Input onChange={handleChange} type="text" value={data?.code || ''} name="code" />
                        </div>
                        <div>
                            <Label htmlFor="description" sm={5} size="lg">Description</Label><br/>
                            <Input onChange={handleChange} type="text" value={data?.description || ''} name="description" />
                        </div><br/>
                        <Link to='/units' className="btn btn-outline-danger float-right" style={{ width: 100 }}>Back</Link>
                        <button className="btn btn-outline-primary float-right mr-3"> {id > 0 ? "Update" : "Submit"} </button>
                    </form> :
                    <div>Loading ...</div>
                }
                    </div>
                </div>
            </div >
        </Container>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        // call reducer
        error: state.findUnitById.error || state.saveUnit.error,
        unit: state.findUnitById.data,
        isLoading: state.findUnitById.isLoading,
        update: state.updateUnit,
        savedUnit: state.saveUnit.data
    }
}

const mapDispatchToProps = { findById, save }


export default connect(mapStateToProps, mapDispatchToProps)(UnitForm)
