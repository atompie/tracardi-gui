import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import React, {useState} from "react";
import {BsEye, BsEyeSlashFill} from "react-icons/bs";
import TextField from "@mui/material/TextField";

export default function PasswordInput({label="Password", value, onChange, fullWidth=false, error, helperText }) {

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        if(onChange) {
            onChange(event)
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return <FormControl variant="outlined">
        <TextField
            fullWidth={fullWidth}
            size="small"
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={handleChange}
            error={error}
            helperText={helperText}
            InputProps={{
                endAdornment: <InputAdornment position="end">
                <span
                    style={{display: "flex", alignItems: "center", cursor: "pointer"}}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                >
                {showPassword ? <BsEyeSlashFill size={20}/> : <BsEye size={20}/>}
                </span>
                </InputAdornment>
            }}
            label={label}
        />
    </FormControl>
}
