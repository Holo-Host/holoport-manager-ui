import React, {Component} from 'react';
import {Button, FormControlLabel, MenuItem, Radio, Typography} from '@material-ui/core';
import {TextFieldFormsy, CheckboxFormsy, RadioGroupFormsy, SelectFormsy} from '@fuse';
import Formsy from 'formsy-react';

class SimpleFormExample extends Component {
    state = {
        canSubmit: false
    };

    disableButton = () => {
        this.setState({canSubmit: false});
    };

    enableButton = () => {
        this.setState({canSubmit: true});
    };

    onSubmit = (model) => {
        console.info('submit', model);
    };

    render()
    {
        const {canSubmit} = this.state;

        return (
            <div className="max-w-sm">
                <Typography className="h2 mb-24">Example Formsy Form</Typography>
                <Formsy
                    onValidSubmit={this.onSubmit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    ref={(form) => this.form = form}
                    className="flex flex-col justify-center"
                >

                    <TextFieldFormsy
                        className="mb-24"
                        type="text"
                        name="name"
                        label="Name"
                        validations={{
                            minLength: 4
                        }}
                        validationErrors={{
                            minLength: 'Min character length is 4'
                        }}
                        required
                    />

                    <TextFieldFormsy
                        className="my-24"
                        type="text"
                        name="email"
                        label="Email"
                        validations="isEmail"
                        validationError="This is not a valid email"
                        required
                    />

                    <RadioGroupFormsy
                        className="my-24"
                        name="gender"
                        label="Gender"
                        validations="equals:female"
                        validationError="Only ladies are accepted"
                        required
                    >
                        <FormControlLabel value="male" control={<Radio color="primary"/>} label="Male"/>
                        <FormControlLabel value="female" control={<Radio color="primary"/>} label="Female"/>
                        <FormControlLabel value="other" control={<Radio color="primary"/>} label="Other"/>
                        <FormControlLabel
                            value="disabled"
                            disabled
                            control={<Radio/>}
                            label="(Disabled option)"
                        />
                    </RadioGroupFormsy>

                    <SelectFormsy
                        className="my-24"
                        name="related"
                        label="Related with"
                        value="none"
                        validations="equals:none"
                        validationError="Must be None"
                    >
                        <MenuItem value="none">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="hai">Hai</MenuItem>
                        <MenuItem value="olivier">Olivier</MenuItem>
                        <MenuItem value="kevin">Kevin</MenuItem>
                    </SelectFormsy>

                    <CheckboxFormsy
                        className=""
                        name="accept"
                        label="Accept"
                        validations="equals:true"
                        validationError="You need to accept"
                    />

                    <Button
                        type="submit"
                        variant="raised"
                        color="primary"
                        className="mx-auto mt-16"
                        aria-label="LOG IN"
                        disabled={!canSubmit}
                    >
                        Can submit
                    </Button>
                </Formsy>
            </div>
        );
    }
}

export default SimpleFormExample;
