import defaultStyles from "./TwoLinesText.module.css"

const TwoLinesText = ({ children, styles }) => {
    return <p className={`${defaultStyles.text} ${styles}`}>{children}</p>
}

export default TwoLinesText