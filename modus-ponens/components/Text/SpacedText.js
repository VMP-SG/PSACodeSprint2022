const SpacedText = ({ children, styles }) => {
    return (
        <div className={`font-primary mx-6 mt-6 ${styles}`}>
            {children}
        </div>
    )
}

export default SpacedText