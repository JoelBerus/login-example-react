const Card = ({ children, className }) => {
    return (
    <div 
        {...(className && { className: `card ${className}` })}
        >
        {children}
    </div>
    )
}

export default Card;