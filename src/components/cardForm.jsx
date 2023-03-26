import React,{useEffect, useState} from "react";
import Modal from "react-modal";
import { buckets } from "../data";

Modal.setAppElement("#root");

const CardForm = ({ show, onClose, card, action ,createCard,editCard }) => {
    const [cardInfo,setCardInfo] =useState((action==="CREATE")?{name:"",bucketName:"",videoLink:""}:card);
    const onSubmit = () =>{
        if(action==="CREATE"){
            createCard(cardInfo);
        }else if(action==="EDIT"){
            editCard(card.id,{id:card.id,cardInfo});
        }
        onClose();
    }
    useEffect(()=>{
        setCardInfo((action==="CREATE")?{name:"",bucketName:"Music Videos",videoLink:""}:card)
    },[card,show,action])
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      <div className={"close-btn-ctn"}>
        <h1 style={{ flex: "1 90%" }}>{action} CARD</h1>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
       <label onSubmit={() => {}} for="name">
          Card Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Card name.."
          value={cardInfo.name}
          onChange={(e)=>setCardInfo({...cardInfo,name:e.target.value})}
        />

        <label for="videoformat">Video Link</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Video Link"
          value={cardInfo.videoLink}
          onChange={(e)=>setCardInfo({...cardInfo,videoLink:e.target.value})}
        />
        <label for="bucket">Bucket</label>
        <select id="bucket" name="bucket" value={cardInfo.bucketName} onChange={(e)=>setCardInfo({...cardInfo,bucketName:e.target.value})}>
          {buckets.map((bucket, index) => {
            return (
              <option value={bucket.bucketName}>{bucket.bucketName}</option>
            );
          })}
        </select>
        <div className="submit-button-wrapper">
        <input className="button" type="button" onClick={onSubmit} value={(action==="EDIT")?"Save":"Create"} />
        <input className="cancel-button" type="button" value="Cancel" onClick={onClose}/>
        </div>
        
    </Modal>
  );
};

export default CardForm;
