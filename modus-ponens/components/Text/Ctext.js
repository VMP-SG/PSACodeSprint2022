const Ctext = ({ children, styles, onClick }) => {
    return <div className={`text-center font-primary ${styles}`} onClick={onClick} disabled>
        {children}
    </div>
}

export default Ctext