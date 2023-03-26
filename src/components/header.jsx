import React, { useState } from "react";
import CardForm from "./cardForm";

const Header = ({createCard}) => {
  const [cardFormShow, setCardFormShow] = useState(false);

  const onCardFormClose = () => setCardFormShow(false);
  const onCardFormOpen = () => setCardFormShow(true);


  return (
    <div className="page-header">
      <p className="title"><a href="./">Convin</a></p>
      <div className="buttons">
        
        <button onClick={onCardFormOpen} style={{
                        backgroundColor: "#FFD1D1",
                        color: "#000",
                        fontSize: "16px",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        border: "1px solid black",
                        cursor: "pointer",
                      }}>
          Create Card
        </button>
        <a href="/history"><button style={{
                        backgroundColor: "#FFD1D1",
                        color: "#000",
                        fontSize: "16px",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        border: "1px solid black",
                        cursor: "pointer",
                      }}>History</button></a>
        
      </div>
      <CardForm onClose={onCardFormClose} createCard={createCard} action="CREATE" show={cardFormShow} />
    </div>
  );
};

export default Header;
