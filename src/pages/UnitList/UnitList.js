import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import UnitRow from "./UnitRow"
import {findAll, removeById} from '../../actions/unit'
import {connect} from "react-redux"
import {Button, Table, ButtonGroup, Fade} from "reactstrap";
import Container from "../../components/container"
import {PaginationButton} from "../../components/Buttons";
import success from "../../components/Alert/success";
import swal from "sweetalert"
import {Spinner} from 'reactstrap';

function UnitList({error, isLoading, isRemoved, units, findAll, removeById, size, total, currentPage}) {

    const [pageParam, setPageParam] = useState(0)
    const [sizeParam, setSizeParam] = useState(10)
    const [searchParam, setSearchParam] = useState({code: null, description: null})

    const totalPage = Math.ceil(total / size)

    const [isSearchShow, setSearchShow] = useState(false)

    const onReload = () => {
        findAll(
            {page: pageParam, size: sizeParam},
            {code: searchParam.code, description: searchParam.description}
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

    const handleSearchCode = (code) => {
        setSizeParam(10)
        setSearchParam({
            ...searchParam,
            code: code
        })
    }

    const handleSearchDescription = (description) => {
        setSizeParam(10)
        setSearchParam({
            ...searchParam,
            description: description
        })
    }


    return (
        <Container error={error}>

            <div className="offset-1">
                <h3>Table Unit</h3>
                {/*<div style={{display: "flex", flexDirection: "row"}}>*/}
                {/*    */}
                {/*</div>*/}

                <div>
                    <Link to="/unit"> <Button color="success">Add </Button>{' '}</Link>
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
                        <form>
                            <input type="text" value={searchParam.code} placeholder='search code' onChange={(event) => {
                                handleSearchCode(event.target.value)
                            }}/>
                            <input type="text" value={searchParam.description} placeholder='search description'
                                   onChange={(event) => {
                                       handleSearchDescription(event.target.value)
                                   }} style={{marginLeft: '2%'}}/>
                            <Button style={{marginLeft: '2%'}} color="primary" size="sm"
                                    onClick={onReload}>Search</Button>
                        </form>
                    </Fade>


                </div>

                <Table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        !isLoading ?
                            units.map((e, i) => {
                                return (
                                    <UnitRow onDeleted={() => onDelete(e.id)} key={i} data={e}/>
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
        error: state.findAllUnit.error || state.removeUnitById.error,
        isRemoved: state.removeUnitById,
        units: state.findAllUnit.data || [],
        isLoading: state.findAllUnit.isLoading || state.removeUnitById.loading,
        size: state.findAllUnit.pagination.size,
        total: state.findAllUnit.pagination.total,
        currentPage: state.findAllUnit.pagination.page
    }
}

const mapDispatchToProps = {findAll, removeById};

export default connect(mapStateToProps, mapDispatchToProps)(UnitList)
