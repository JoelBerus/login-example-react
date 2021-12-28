import TextField from '@mui/material/TextField';

const Input = ({ error ,topNote, bottomNote, className, ...rest }) => {
    const errorField ={
        error: true,
        helperText: error,
    }
    return (
        <div 
            {...(className && { className: `field ${className}` })}>
            {topNote && <div className="top-note">
                <p>
                    {topNote}
                </p>
            </div>}
            <TextField
                {...(error && { ...errorField })}
                {...rest}
                variant="outlined"
                margin="normal"
            />
            {bottomNote && <div className="top-note">
                <p>
                    {bottomNote}
                </p>
            </div>}
        </div>
    )
}

export default Input