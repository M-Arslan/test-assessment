import * as React from 'react';
import {Card,CardActions,CardContent,CardMedia,Typography,Button} from '@material-ui/core';

export default function MediaCard(props) {

    const {item} = props;
  return (
    <Card key={item.id} style={{ width: 300, margin: 10 }}>
        <CardMedia
        component="img"
        height="140"
        image={item.urlToImage}
        alt={item.title}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {item.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
    </Card>

  );
}