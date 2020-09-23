import React, { useState } from 'react'
import axios from 'axios'

import { Typography, Input, Button, Grid, InputLabel } from '@material-ui/core'

export default function App() {

    const [urlToShorten, setUrlToShorten] = useState("")
    const [id, setId] = useState("")

    const shortenLink = () => {
        axios.get(`/api/createUrl?url=${urlToShorten}`)
            .then(res => res.data)
            .then(res => setId(res.id))
    }

    return (
        <Grid container spacing={3} className="app">
            <Grid item xs={12}>
                <Typography color="primary" align="center" variant="h1" component="h4">
                    URL Shortening Service
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography color="secondary" align="center" variant="h4" component="h6">
                    Shorten a URL!
                </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
                <InputLabel>URL to shorten</InputLabel><Input fullWidth value={urlToShorten} type="url" color="primary" onChange={(e) => setUrlToShorten(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <Typography style={{ fontSize: "50px" }} align="center">
                    Your shortened ID is <a href={`/u/${id}`} target="_blank">{id}</a>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth variant="contained" onClick={shortenLink} color="primary">Shorten URL!</Button>
            </Grid>
        </Grid>
    )
}