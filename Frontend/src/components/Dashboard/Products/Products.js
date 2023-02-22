import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import operations from './duck/operations';
import { useEffect,useReducer } from 'react';
import trashcan from '../../../images/icon_trashcan.svg'
import Box from '@mui/material/Box';
import FormDialog from '../Products/FormDialog';


function preventDefault(event) {
  event.preventDefault();
}

export default function Products() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer.products);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0)
  
  useEffect(() => {
    dispatch(operations.fetchProducts());
  }, [ignored])

  const update = () =>{
    forceUpdate()
  }

  return (
    <React.Fragment>
     <Box
      sx={{
        display: 'flex',
        justifyContent:'space-between'
      }}
    >
      <Title>Products</Title>
      <FormDialog trigger={open} setTrigger={setOpen} update={update}/>
    </Box>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">In Stock</TableCell>
            <TableCell align="right">Delete Product</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.productName}</TableCell>
              <TableCell align="right">{`$${product.price}`}</TableCell>
              <TableCell align="right">{product.InStock}</TableCell>
              <TableCell align="right"><div className="one" onClick={()=>{dispatch(operations.productDelete(product.id));forceUpdate()}}><img src={trashcan} alt="trashcanIcon"/></div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See all products
      </Link>
    </React.Fragment>
  );
}