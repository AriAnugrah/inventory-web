import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import ItemRow from "./ItemRow"
import {findAll, removeById} from '../../actions/item'
import {connect} from "react-redux"
import {Button, Table, ButtonGroup, Fade, Spinner} from "reactstrap";
import Container from "../../components/container"
import {PaginationButton} from "../../components/Buttons";
import swal from "sweetalert"

function ItemList({error, isLoading, isRemoved, items, findAll, removeById, size, total, currentPage}) {

    const [pageParam, setPageParam] = useState(0)
    const [sizeParam, setSizeParam] = useState(10)
    const [searchParam, setSearchParam] = useState({name: null, price: null})

    const totalPage = Math.ceil(total / size)

    const [isSearchShow, setSearchShow] = useState(false)

    const onReload = () => {
        findAll(
            {page: pageParam, size: sizeParam},
            {name: searchParam.name, price: searchParam.price}
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
            text: "Once deleted, your lost your data permanently!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    removeById(id)
                    swal("Success! Your data has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Delete canceled");
                }
            });

    }

    const handleSearchName = (name) => {
        setSizeParam(10)
        setSearchParam({
            ...searchParam,
            name: name
        })
    }


    return (
        <Container error={error}>

            <div className="offset-1">
                <h3>Table Item</h3>
                <div>
                    <Link to="/item"> <Button color="success">Add </Button>{' '}</Link>
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
                        <input type="text" value={searchParam.name} placeholder='search name' onChange={(event) => {
                            handleSearchName(event.target.value)
                        }}/>
                        <Button style={{marginLeft: '2%'}} color="primary" size="sm" onClick={onReload}>Search</Button>
                    </Fade>


                </div>
                <Table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        !isLoading ?
                            items.map((e, i) => {
                                return (
                                    <ItemRow onDeleted={() => onDelete(e.id)} key={i} data={e}/>
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
        error: state.findAllItem.error || state.removeItemById.error,
        isRemoved: state.removeItemById,
        items: state.findAllItem.data || [],
        isLoading: state.findAllItem.isLoading || state.removeItemById.loading,
        size: state.findAllItem.pagination.size,
        total: state.findAllItem.pagination.total,
        currentPage: state.findAllItem.pagination.page
    }
}

const mapDispatchToProps = {findAll, removeById};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
