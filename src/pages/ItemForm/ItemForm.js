import React, {useState, useEffect} from 'react'
import {useHistory, useParams, Link} from 'react-router-dom'
import {findById, save} from "../../actions/item"
import {connect} from "react-redux"
import {findAll} from "../../actions/unit"
import {saveItem} from '../../reducers/item'
import success from "../../components/Alert/success";
import Container from "../../components/container";

const ItemForm = ({isLoading, findById, item, savedItem, save, units, findAll}) => {
    const {id} = useParams();
    const [data, setData] = useState({})
    const history = useHistory();

    useEffect(() => {
        findAll({page: 0, size: 10},
            {code: null, description: null})
    }, [findAll])


    useEffect(() => {
        if (data && id && parseInt(id) != data.id) {
            findById(id)
            setData(item)
        } else if (id && data == null) {
            setData(item)
        }
    }, [item])


    useEffect(() => {
        console.log("coba")
        if (savedItem) {

            history.push('/items')
            success()
        }

    }, [savedItem])


    const handleChange = e => {
        let name = e.target.name
        let value = e.target.value

        if (name == "unitId" || name == "price") value = parseInt(value)

        setData({...data, [name]: value})
    }


    const handleSubmit = e => {
        e.preventDefault()
        save(data)
    }


    return (
        <Container>
            <div className="offset-1">
                <h3>Item Form</h3>
            </div>
            <div className="container">
                <div className="card col-8 offset-2 mt-5">
                    <div className="card-body">

                        {!isLoading ? units &&

                            <form onSubmit={handleSubmit}>
                                <input onChange={handleChange} type="text" value={data?.id || ''} name="id"
                                       hidden={true}/>

                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input onChange={handleChange} className="form-control" type="text"
                                           value={data?.name || ''} name="name"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price">Price</label>
                                    <input onChange={handleChange} type="text" className="form-control"
                                           value={data?.price || ''} name="price"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Unit</label>
                                    <select className="form-control" name="unitId" onChange={handleChange}>
                                        <option value="false" hidden>-- Select Option --</option>
                                        {units.map(element => {
                                            return (
                                                <option value={element.id}
                                                        selected={element.id == data?.unit?.id || false}>
                                                    {element.description}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>

                                <Link to='/items' className="btn btn-outline-danger float-right"
                                      style={{width: 100}}>Back</Link>
                                <button
                                    className="btn btn-outline-primary float-right mr-3"> {id > 0 ? "Update" : "Submit"} </button>
                            </form> :
                            <div>Loading ...</div>

                        }
                    </div>
                </div>
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        item: state.findItemById.data,
        units: state.findAllUnit.data,
        isLoading: state.findItemById.isLoading,
        update: state.updateItem,
        savedItem: state.saveItem.data
    }
}

const mapDispatchToProps = {findById, save, findAll}

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm)