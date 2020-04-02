import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const onSelectionChange = (event) => {
        setValue(event.target.value);
        props.onSelectionChange(event.target.value, props.id);
    }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">{props.placeholder}</InputLabel>
                <Select disabled={props.isDisabled}
                    value={value}
                    onChange={onSelectionChange}
                >
                    {
                        props.options.map((val) => {
                            return (
                                <MenuItem value={val}>{val}</MenuItem>
                            );
                        })
                    }                    
                </Select>
            </FormControl>
            
        </div>
    );
}