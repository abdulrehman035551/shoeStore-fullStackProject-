import { AlternateEmailRounded } from '@mui/icons-material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from "../../store/addtocard"
// import { toast } from 'react-toastify';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

function Card(props) {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createData(name, picture, noOfPairs, price, remove, size) {
        return { name, picture, noOfPairs, price, remove, size };
    }

   

    const dispatch = useDispatch()
    const handelDele = (value) => {
      
        dispatch(remove(value))

        // toast('🦄 add scussefully', {



        //     position: "top-right",
        //     autoClose: 300,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
    }

    let products = useSelector((state) => state.add)
    console.log(products);
    if (products.length == 0) {
        return <h1 style={{fontFamily :'Roboto Condensed',textAlign:"center"}}>Your Card Is Empty</h1>
    }

    let total = 0
    products.forEach((val) => {
        total += val.count * val.price
    })
    // console.log(total)

    return (
        <div>
            

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >itemName</StyledTableCell>
                            <StyledTableCell align="right">picture</StyledTableCell>
                            <StyledTableCell align="right">size</StyledTableCell>
                            <StyledTableCell align="right">number of pairs</StyledTableCell>
                            <StyledTableCell align="right">price</StyledTableCell>
                            <StyledTableCell align="right">remove</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right"><img style={{width:100}} src={row.image.url}></img></StyledTableCell>
                                <StyledTableCell align="right">{row.size}</StyledTableCell>
                                <StyledTableCell align="right">{row.count}</StyledTableCell>
                                <StyledTableCell align="right">{row.price}</StyledTableCell>
                                <StyledTableCell align="right"> <DeleteIcon onClick={() => handelDele(row.id)} /></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <h5 >ToalAmount{" "}={total}{" "}$</h5>
        </div>
       
    );
}

export default Card;