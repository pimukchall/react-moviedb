import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function MovCreate() {  
  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      'name_movie': name_movie,
      'description': description,
      'release_date': release_date,
      'poster': poster,
    }
    fetch('https://tame-erin-chimpanzee-ring.cyclic.app/movie', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((result) => {
        alert(result['message'])
        if (result['status'] === 'ok') {
          window.location.href = '/';
        }
      })
  }

  const [name_movie, setName] = useState('');
  const [description, setDescription] = useState('');
  const [release_date, setRelease] = useState('');
  const [poster, setPoster] = useState('');
  return (
    <Container sx={{ p:2 }} maxWidth="sm">    
      <div>
        <Typography component="h1" variant="h5">
          Create
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ pt:2 }} spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                number="name_movie"
                label="Name"
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                number="description"
                label="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                number="release_date"
                label="Release Date"
                onChange={(e) => setRelease(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                number="poster"
                label="Poster"
                onChange={(e) => setPoster(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Create
            </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}