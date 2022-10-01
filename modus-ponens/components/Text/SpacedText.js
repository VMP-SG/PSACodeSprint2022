const SpacedText = ({ children, styles }) => {
    return (
        <div className={`font-primary px-6 mt-6 ${styles}`}>
            {children}
        </div>
    )
}

export default SpacedText