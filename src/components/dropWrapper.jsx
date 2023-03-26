import React from "react";
import { useDrop } from "react-dnd";
import cardType from "./../constants";
import { buckets } from "../data";

const DropWrapper = ({ onDrop, children, bucket }) => {
    const [{ isOver }, drop] = useDrop({
        accept: cardType,
        canDrop: (card, monitor) => {
            const bucketIndex = buckets.findIndex(si => si.bucketName === bucket);
            return [...Array(buckets.length).keys()].includes(bucketIndex);
        },
        drop: (card, monitor) => {
            onDrop(card, monitor, bucket);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <div ref={drop} className={"drop-wrapper"}>
            {React.cloneElement(children, { isOver })}
        </div>
    )
};

export default DropWrapper;
