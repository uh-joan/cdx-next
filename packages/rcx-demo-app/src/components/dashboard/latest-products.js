import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { v4 as uuid } from 'uuid';

const msPerMinute = 60 * 1000;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;

const formatDistanceToNow = (date1) => {
  const now = new Date();
  const date = new Date(date1);
  const elapsed = now.getTime() - date.getTime();
  if (elapsed < msPerMinute) {
    return 'meno di un minuto fa';
  } else if (elapsed < msPerHour) {
    const minutes = Math.round(elapsed / msPerMinute);
    return `${minutes} ${minutes === 1 ? 'minuto' : 'minuti'} fa`;
  } else if (elapsed < msPerDay) {
    const hours = Math.round(elapsed / msPerHour);
    return `${hours} ${hours === 1 ? 'ora' : 'ore'} fa`;
  } else {
    const days = Math.round(elapsed / msPerDay);
    return `${days} ${days === 1 ? 'giorno' : 'giorni'} fa`;
  }
};

const products = [
  {
    id: uuid(),
    name: 'Creative Writing: Fiction',
    imageUrl: '/assets/writing.png',
    updatedAt: new Date().setHours(new Date().getHours() - 2),
  },
  {
    id: uuid(),
    name: 'Programs, Information and People',
    imageUrl: '/assets/programming.png',
    updatedAt: new Date().setHours(new Date().getHours() - 3),
  },
  {
    id: uuid(),
    name: 'Business and the Environment',
    imageUrl: '/assets/business-environment.png',
    updatedAt: new Date().setHours(new Date().getHours() - 6),
  },
  {
    id: uuid(),
    name: 'Dinosaurs and Other Failures',
    imageUrl: '/assets/dinosaur.png',
    updatedAt: new Date().setHours(new Date().getHours() - 8),
  },
  {
    id: uuid(),
    name: 'Aliens',
    imageUrl: '/assets/alien.png',
    updatedAt: new Date().setHours(new Date().getHours() - 10),
  },
];

export const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Latest Subjects"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem divider={i < products.length - 1} key={product.id}>
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48,
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
          <IconButton edge="end" size="small">
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
