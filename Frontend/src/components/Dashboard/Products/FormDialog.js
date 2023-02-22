import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import operations from './duck/operations';
import { useDispatch } from 'react-redux';

export default function FormDialog({update}) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [productName, setProductName] = React.useState('')
  const [price, setPrice] = React.useState()
  const [InStock, setStock] = React.useState()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const saveProduct = () => {
    const data = {
      productName:productName,
      price:price,
      InStock:InStock
    }
    dispatch(operations.save(data));
    update();
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="apple" size="small" onClick={handleClickOpen}>
        New Product
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
        <DialogTitle sx={{color: 'primary.dark'}}>New Product</DialogTitle>
        <DialogContent>
        <Box
            sx={{
                width: '60vw',
                height: "10vh" 
            }}
            >
                <div className='newproduct'>
                    <p>Product Name</p><p>Price</p><p>Curent Stock</p>
                    <input type='text' onChange={(e)=>setProductName(e.target.value)}/>
                    <input className='input_number' type='number' placeholder='$' onChange={(e)=>setPrice(e.target.value)} />
                    <input className='input_number' type='number' placeholder='0' onChange={(e)=>setStock(e.target.value)}/>
                </div>

            </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveProduct}>Save Product</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}