import React from 'react'
import {Grid, Card, CardContent, Typography, Container} from "@mui/material"

const CardComponent = () => {
  return (
    <>
     <Container maxWidth= "lg">
      <Typography variant='h4' align='center' style={{marginTop:"50px"}}>
        our facilities
      </Typography>
      <Grid container spacing={5} style={{marginTop:"20px"}}>
        {Data.map((result, index)=>{
          <Grid item xs={12} ms={4} key={index}>
               <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </Grid>

        })}
      </Grid>
     </Container>
    
    
    </>
  )
}

export default CardComponent