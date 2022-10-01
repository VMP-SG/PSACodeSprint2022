import Ctext from "../Text/Ctext"

const Button = ({ children, borderColor, bgColor, textColor, onClick }) => {
    return (
        <div onClick={onClick} className={`rounded-md bg-${bgColor} ${textColor} ${borderColor ? "border border-" + borderColor : ""}`}>
            <Ctext>
                {children}
            </Ctext>
        </div>
    )
}

export default Button