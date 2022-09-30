const MaxRow = ({
    leftAlign='center',
    rightAlign='center',
    leftTextAlign='left',
    rightTextAlign='right',
    leftChild,
    rightChild,
    leftFrac='1/2'
}) => {
    return <div className="flex flex-row w-full justify-between space-x-4">
        <div className={`flex flex-row w-${leftFrac} items-${leftAlign} text-${leftTextAlign}`}>
            {leftChild}
        </div>
        <div className={`flex flex-row-reverse grow items-${rightAlign} text-${rightTextAlign}`}>
            {rightChild}
        </div>
    </div>;
}

export default MaxRow;