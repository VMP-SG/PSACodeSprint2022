import SpacedText from "../../Text/SpacedText"

const CategoryHeader = ({ children }) => {
    return <SpacedText styles={"text-card-header col-span-2"}>
        {children}
    </SpacedText>
}

export default CategoryHeader