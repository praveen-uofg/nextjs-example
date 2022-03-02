import React, { useState } from "react";

import {Grid, TextField, Button} from '@mui/material'

import { submitFormData } from '@/api/formSubmit'


const defaultValues = {
    first_name: "",
    last_name: "",
    age: 0
};


const Form = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const url = "https://webhook.site/48b79f56-fa48-4d2a-8900-eeb611bcc6c2"
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(formValues)

        submitFormData(url, JSONdata).then((result) => {
            let res = { ...result };
            alert(`Is this your full name:${res}`)
        })
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item my={3}>
                        <TextField
                            id="name-input"
                            name="first_name"
                            label="First Name"
                            type="text"
                            value={formValues.first_name}
                            onChange={handleInputChange}
                            InputLabelProps={{ shrink: true, style: { color: '#000' }}}
                        />
                    </Grid>
                    <Grid item my={3}>
                        <TextField
                            id="name-input"
                            name="last_name"
                            label="Last Name"
                            type="text"
                            value={formValues.last_name}
                            onChange={handleInputChange}
                            InputLabelProps={{ shrink: true, style: { color: '#000' }}}
                        />
                    </Grid>
                    <Grid item my={3}>
                        <TextField
                            id="age-input"
                            name="age"
                            label="Age"
                            type="number"
                            value={formValues.age}
                            onChange={handleInputChange}
                            InputLabelProps={{ shrink: true, style: { color: '#000' }}}
                        />
                    </Grid>
                    <Button variant="contained" color="primary" type="submit" my={3}>
                        Submit
                    </Button>
                </Grid>
            </form>
        </>
    )
};
export default Form;