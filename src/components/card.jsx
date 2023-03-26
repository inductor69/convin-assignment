import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import cardType from "../constants";
import Window from "./window";
import { BiEdit } from "react-icons/bi";
import CardForm from "./cardForm";
import { RiDeleteBin6Line } from "react-icons/ri";

const Card = ({ card, index, movecard, bucket, onClick, selected, editCard, createCard, onDelete }) => {
  const ref = useRef(null);

  const [cardFormShow, setCardFormShow] = useState(false);

  const onCardFormClose = () => setCardFormShow(false);
  const onCardFormOpen = () => setCardFormShow(true);

  const [collectedProps, drop] = useDrop({
    accept: cardType,
    hover(card, monitor) {
      if (!ref.current) return;
      const dragIndex = card.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;
      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoveredRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) return;
      movecard(dragIndex, hoverIndex);
      card.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: card,
    type: cardType,
    index: index,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [show, setShow] = useState(false);

  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  drag(drop(ref));

  return (
    <Fragment>
      <div
        ref={ref}
        style={{
          opacity: isDragging ? 0 : 1,
          background: onClick && !selected ? "rgba(0,0,0,0.5)" : "#FFF5E4",
          border: selected ? "3px solid #FFC107" : "1px solid #121212",
        }}
        className={"card"}
      >
        {!onClick ? (
          <>
            <RiDeleteBin6Line
              className="float-right"
              color="rgb(247, 82, 82)"
              style={{ margin: "5px" }}
              onClick={()=>{onDelete(card.id)}}
            />
            <BiEdit
              className="float-right"
              style={{ margin: "5px" }}
              onClick={onCardFormOpen}
            />
          </>
        ) : null}
        <div onClick={onClick ? onClick : onOpen}>
          <p className={"card-title"}>{card.name}</p>
          <p className={"card-title"}>Video Link:{card.videoLink.substring(0,15)}...</p>
        </div>
        <Window card={card} onClose={onClose} show={show} />
        <CardForm onClose={onCardFormClose} action="EDIT" card={card} editCard={editCard} createCard={createCard} show={cardFormShow} />
      </div>
    </Fragment>
  );
};

export default Card;
