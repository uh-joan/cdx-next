import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@mui/material';
import { v4 as uuid } from 'uuid';

import { SeverityPill } from '../severity-pill';

const orders = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova',
    },
    createdAt: 1555016400000,
    status: 'failed',
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu',
    },
    createdAt: 1555016400000,
    status: 'passed',
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson',
    },
    createdAt: 1554930000000,
    status: 'failed',
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer',
    },
    createdAt: 1554757200000,
    status: 'failed',
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert',
    },
    createdAt: 1554670800000,
    status: 'passed',
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov',
    },
    createdAt: 1554670800000,
    status: 'passed',
  },
];

export const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Latest examens" />
    <Box sx={{ minWidth: 800 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Examen ref</TableCell>
            <TableCell>Student</TableCell>
            <TableCell sortDirection="desc">
              <Tooltip enterDelay={300} title="Sort">
                <TableSortLabel active direction="desc">
                  Date
                </TableSortLabel>
              </Tooltip>
            </TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow hover key={order.id}>
              <TableCell>{order.ref}</TableCell>
              <TableCell>{order.customer.name}</TableCell>
              <TableCell>
                {`${new Date(order.createdAt)
                  .getDate()
                  .toString()
                  .padStart(2, '0')}/${(
                  new Date(order.createdAt).getMonth() + 1
                )
                  .toString()
                  .padStart(2, '0')}/${new Date(order.createdAt)
                  .getFullYear()
                  .toString()}`}
              </TableCell>
              <TableCell>
                <SeverityPill
                  color={
                    (order.status === 'passed' && 'success') ||
                    (order.status === 'refunded' && 'error') ||
                    'warning'
                  }
                >
                  {order.status}
                </SeverityPill>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
