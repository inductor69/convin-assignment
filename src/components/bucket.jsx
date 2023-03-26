import React from "react";
import Card from "../components/card";
import DropWrapper from "./../components/dropWrapper";
import Col from "./../components/col";
import { BiEdit } from "react-icons/bi";
import BucketForm from "./../components/bucketForm";
import {RiDeleteBin6Line} from "react-icons/ri";

const Bucket = ({s,selectedMultipleBucket,onBucketFormOpen,setSelectedMultipleBucket,onBucketFormClose,bucketFormShow,onDrop,cards,movecard,selectedMultipleCards,onSelect})=>{
    const [bucketFormShow, setBucketFormShow] = useState(false);
  const onBucketFormClose = () => setBucketFormShow(false);
  const onBucketFormOpen = () => setBucketFormShow(true);
    return <div
    key={s.bucketName}
    className={"col-wrapper"}
    style={{ zIndex: selectedMultipleBucket === s.bucketName ? 7 : "" }}
  >
    <div style={{ padding: "0.5em" }}>
      <BiEdit
        className="float-right"
        style={{ float: "right" }}
        onClick={onBucketFormOpen}
      />
      <span
        className={"col-header"}
        onClick={() => setSelectedMultipleBucket(s.bucketName)}
      >
        {s.bucketName.toUpperCase()}
      </span>
      <BucketForm
        onClose={onBucketFormClose}
        action="EDIT"
        bucket={s}
        show={bucketFormShow}
      />
      {selectedMultipleBucket === s.bucketName ? (
        <>
          <button className="cancel-button">
            <RiDeleteBin6Line /> Delete
          </button>
          <button
            style={{ color: "rgb(247, 82, 82)" }}
            onClick={() => setSelectedMultipleBucket(null)}
          >
            X Cancel
          </button>
        </>
      ) : (
        <button
          onClick={() => setSelectedMultipleBucket(s.bucketName)}
          className="cancel-button"
          style={{ width: "150px" }}
        >
          <RiDeleteBin6Line /> Delete Multiple
        </button>
      )}
    </div>
    <DropWrapper onDrop={onDrop} bucket={s.bucketName}>
      <Col>
        {cards
          .filter((i) => {
            if (!i) return false;
            return i.bucketName === s.bucketName;
          })
          .map((i, idx) => {
            if (!i) return null;
            return (
              <Card
                key={i.id}
                card={i}
                index={idx}
                movecard={movecard}
                bucket={s}
                selected={
                  selectedMultipleCards.includes(i.id) ? true : false
                }
                cards={cards}
                onClick={
                  selectedMultipleBucket === i.bucketName
                    ? () => onSelect(i.id)
                    : null
                }
              />
            );
          })}
      </Col>
    </DropWrapper>
  </div>

}

export default Bucket;