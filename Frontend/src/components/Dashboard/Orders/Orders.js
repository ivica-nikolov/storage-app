import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
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
import FormDialog from './FormDialog';



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


function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const orders = useSelector(state => state.ordersReducer.orders);
  
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0)
  
  useEffect(() => {
    dispatch(operations.fetchOrders());
  }, [ignored])

  const update = () =>{
    forceUpdate()
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box
      sx={{
        display: 'flex',
        justifyContent:'space-between'
      }}
    >
      <Title>Recent Orders</Title>
      <FormDialog trigger = {open} setTrigger={setOpen} update={update}/>
    </Box>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Order Number</TableCell>
            <TableCell>For Company</TableCell>
            <TableCell align="right">Total Amount</TableCell>
            <TableCell align="right">Delete Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderNumber}>
              <TableCell>{order.orderNumber}</TableCell>
              <TableCell>{order.company}</TableCell>
              <TableCell align="right">{`$1000`}</TableCell>
              <TableCell align="right"><div className="one" onClick={()=>{dispatch(operations.orderDelete(order.orderNumber));forceUpdate()}}><img src={trashcan} alt="trashcanIcon"/></div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
      
      </ThemeProvider>

  );
}