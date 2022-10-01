import SpacedText from "../../Text/SpacedText"

const FormHeader = ({children}) => {
    return <SpacedText styles={"text-[2.2rem] font-semibold col-span-2 truncate"}>{children}</SpacedText>
}

export default FormHeader