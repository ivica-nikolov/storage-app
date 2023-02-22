import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import productOperations from '../Products/duck/operations';
import orderOprations from '../Orders/duck/operations'

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const mdTheme = createTheme({
  palette: {
    white: createColor('#ffffff'),
    black: createColor('#000000'),
    blue: createColor('#145369'),
    apple: createColor('#5DBA40')
    
  },
});


export default function FormDialog({update}) {
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);
  const [company, setCompany] = React.useState('');
  const [InStock, setStock] = React.useState();
  const [cart, setCart] = React.useState([]);
  
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer.products);
  const handleAdd = (product) => {
      let newProduct = 
      {
          id:product.id,
          productName:product.productName,
          InStock: InStock,
          quantity:quantity
      }
      setCart(cart => [...cart , newProduct])
      
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCart([]);
  };
  const order = () => {
    cart.map((product) => (dispatch(productOperations.productsUpdate(product))))

    dispatch(orderOprations.save(company))
    update();

  };

  return (
    <div>
      <Button variant="contained" color="apple" size="small" onClick={handleClickOpen}>
        New Order
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
        <DialogTitle sx={{color: 'primary.dark'}}>New Order</DialogTitle>
        <DialogContent>
        <Box
            sx={{
                width: '60vw',
                height: "100%vh" 
            }}
            >
                <ThemeProvider theme={mdTheme}>
    <TextField id="filled-basic" label="To" variant="filled" onChange={(e)=>setCompany(e.target.value)}/>
    <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Add Product</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.productName}</TableCell>
              <TableCell align="right">{`$${product.price}`}</TableCell>
              <TableCell align="right"><input className='quantityInput' type='number' onChange={(e)=>{setQuantity(e.target.value);setStock(product.InStock - e.target.value)}}/></TableCell>
              <TableCell align="right"><Button onClick={()=>handleAdd(product)}>ADD</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

            <h2 className='orderCart'>Order Cart</h2>
       <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.productName}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table> 
      
      </ThemeProvider>

            </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={order}>Order</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}