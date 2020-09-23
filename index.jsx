import React, { useState } from 'react'
import axios from 'axios'

import { Typography, TextField, Button } from '@material-ui/core'

export default function App() {

    const [urlToShorten, setUrlToShorten] = useState("")
    const [id, setId] = useState("")

    const shortenLink = () => {
        axios.get(`/api/createUrl?url=${urlToShorten}`)
            .then(res => res.data)
            .then(res => setId(res.id))
    }

    return (
        <div className="app">
            <Typography color="primary" align="center" variant="h1" component="h4">
                URL Shortening Service
            </Typography>
            <Typography color="secondary" align="center" variant="h4" component="h6">
                Shorten a URL!
            </Typography>
            <TextField fullWidth type="url" variant="filled" onChange={(e) => setUrlToShorten(e.target.value)} />
            <div>{id}</div>
            <Button variant="contained" onClick={shortenLink} color="primary" align="center" >Shorten URL!</Button>
        </div>
    )
}