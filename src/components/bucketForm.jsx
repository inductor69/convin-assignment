import React,{useState,useEffect} from "react";
import Modal from "react-modal";
import { data } from "../data";

Modal.setAppElement("#root");

const BucketForm = ({ show, onClose, bucket, action ,createBucket, editBucket,index }) => {
    const [bucketInfo,setBucketInfo] = useState(bucket);

    const onSubmit = () =>{
        editBucket(index,bucketInfo);
        onClose();
    }
    useEffect(()=>{
        setBucketInfo(bucket);
    },[bucket,show,action])
    
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      <div className={"close-btn-ctn"}>
        <h1 style={{ flex: "1 90%" }}>{action} BUCKET</h1>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
        <label onSubmit={() => {}} for="name">
          Bucket Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Bucket Name..."
          value={bucketInfo.bucketName}
          onChange={(e)=>setBucketInfo({...bucketInfo,bucketName:e.target.value})}
        />

        <label for="description">Description</label>
        <textarea
          type="text"
          id="description"
          name="description"
          placeholder="Add description..."
          value={bucketInfo.discription}
          onChange={(e)=>setBucketInfo({...bucketInfo,discription:e.target.value})}
        />
        
        <div className="submit-button-wrapper">
          <input
            className="button"
            type="button"
            onClick={onSubmit}
            value={action === "EDIT" ? "Save" : "Create"}
          />
          <input className="cancel-button" type="button" value="Cancel" onClick={onClose}/>
        </div>
    </Modal>
  );
};

export default BucketForm;
