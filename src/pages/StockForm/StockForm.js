import React, {useState, useEffect} from 'react'
import {useHistory, useParams, Link} from 'react-router-dom'
import {findById, save} from "../../actions/stock"
import {connect} from "react-redux"
import {findAll} from "../../actions/item"
import {saveStock} from '../../reducers/stock'
import Container from "../../components/container";
import success from "../../components/Alert/success";

const StockForm = ({isLoading, findById, stock, savedStock, save, items, findAll}) => {
    const {id} = useParams();
    const [data, setData] = useState({})
    const history = useHistory();

    useEffect(() => {
        findAll({page: 0, size: 10},
            {quantity: null})
    }, [findAll])


    useEffect(() => {
        if (data && id && parseInt(id) != data.id) {
            findById(id)
            setData(stock)
        } else if (id && data == null) {
            setData(stock)
        }
    }, [stock])


    useEffect(() => {
        if (savedStock) {
            history.push('/stocks')
            success()
        }
    }, [savedStock])


    const handleChange = e => {
        let name = e.target.name
        let value = e.target.value

        if (name == "itemId" || name == "quantity") value = parseInt(value)

        setData({...data, [name]: value})
    }


    const handleSubmit = e => {
        e.preventDefault()
        save(data)
    }


    return (
        <Container>
            <div className="offset-1">
                <h3>Stock Form</h3>
            </div>
            <div className="container">
                <div className="card col-8 offset-2 mt-5">
                    <div className="card-body">
                        {!isLoading ? items &&

                            <form onSubmit={handleSubmit}>
                                <input onChange={handleChange} type="text" value={data?.id || ''} name="id"
                                       hidden={true}/>


                                <div className="form-group">
                                    <label htmlFor="quantity">Quantity</label>
                                    <input onChange={handleChange} type="text" className="form-control"
                                           value={data?.quantity || ''} name="quantity"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="itemId">Item</label>
                                    <select className="form-control" name="itemId" onChange={handleChange}>
                                        <option value="false" hidden>-- Select Option --</option>
                                        {items.map(element => {
                                            return (
                                                <option value={element.id}
                                                        selected={element.id == data?.item?.id || false}>
                                                    {element.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>

                                <Link to='/stocks' className="btn btn-outline-danger float-right"
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
        stock: state.findStockById.data,
        items: state.findAllItem.data,
        isLoading: state.findStockById.isLoading,
        update: state.updateStock,
        savedStock: state.saveStock.data
    }
}

const mapDispatchToProps = {findById, save, findAll}

export default connect(mapStateToProps, mapDispatchToProps)(StockForm)