import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import StockRow from "./StockRow"
import {findAll, removeById} from '../../actions/stock'
import {connect} from "react-redux"
import {Button, Table, ButtonGroup, Fade, Spinner} from "reactstrap";
import Container from "../../components/container"
import {PaginationButton} from "../../components/Buttons";
import swal from "sweetalert"

function StockList({error, isLoading, isRemoved, stocks, findAll, removeById, size, total, currentPage}) {

    const [pageParam, setPageParam] = useState(0)
    const [sizeParam, setSizeParam] = useState(10)
    const [searchParam, setSearchParam] = useState({quantity: null})

    const totalPage = Math.ceil(total / size)

    const [isSearchShow, setSearchShow] = useState(false)

    const onReload = () => {
        findAll(
            {page: pageParam, size: sizeParam},
            {quantity: searchParam.quantity}
        )
    }

    useEffect(() => {
        onReload()
    }, [findAll, pageParam, sizeParam])

    useEffect(() => {
        if (isRemoved) {
            onReload()
        }
    }, [isRemoved])

    const onDelete = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    removeById(id)
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });

    }

    const handleSearchName = (quantity) => {
        setSizeParam(10)
        setSearchParam({
            ...searchParam,
            quantity: quantity
        })
    }

    return (
        <Container error={error}>
            <div className="offset-1">
                <h3>Table Stock</h3>

                <div>
                    <Link to="/stock"> <Button color="success">Add </Button>{' '}</Link>
                    <Button color="info" onClick={onReload}>Refresh Data</Button>{' '}
                    <Button color="primary" onClick={() => {
                        setSearchShow(!isSearchShow)
                    }}>Search</Button>
                    <ButtonGroup style={{marginLeft: '36%'}}>
                        <Button color="primary" onClick={() => {
                            setSizeParam(1)
                        }}>1</Button>
                        <Button color="primary" onClick={() => {
                            setSizeParam(5)
                        }}>5</Button>
                        <Button color="primary" onClick={() => {
                            setSizeParam(10)
                        }}>10</Button>
                    </ButtonGroup>

                    <Fade in={isSearchShow} tag="h5" className="mt-3">
                        <input type="text" value={searchParam.quantity} placeholder='search quantity'
                               onChange={(event) => {
                                   handleSearchName(event.target.value)
                               }}/>
                        <Button style={{marginLeft: '2%'}} color="primary" size="sm" onClick={onReload}>Search</Button>
                    </Fade>
                </div>
                <Table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        !isLoading ?
                            stocks.map((e, i) => {
                                return (
                                    <StockRow onDeleted={() => onDelete(e.id)} key={i} data={e}/>
                                )
                            }) :
                            <tr>
                                <td colSpan="3"> Loading.. <Spinner color="primary"/></td>
                            </tr>
                    }
                    </tbody>
                </Table>


                <PaginationButton
                    currentPage={currentPage}
                    setPage={setPageParam}
                    totalPage={totalPage}
                />

            </div>
        </Container>

    )
}

const mapStateToProps = (state) => {
    return {
        error: state.findAllStock.error || state.removeStockById.error,
        isRemoved: state.removeStockById,
        stocks: state.findAllStock.data || [],
        isLoading: state.findAllStock.isLoading || state.removeStockById.loading,
        size: state.findAllStock.pagination.size,
        total: state.findAllStock.pagination.total,
        currentPage: state.findAllStock.pagination.page
    }
}

const mapDispatchToProps = {findAll, removeById};

export default connect(mapStateToProps, mapDispatchToProps)(StockList)
