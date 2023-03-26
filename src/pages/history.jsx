import React,{useState} from "react";

function HistoryCard(props){
    return <div className="flex align-space-evely justify-space-between leader-card" >
        <span >{props.rank}</span>
        <span>{props.user.username}</span>
        <span>{props.user.totalGames}</span>
        <span>{props.user.won}</span>
        </div>;
}


const History = ({ show, onClose, card }) => {
    const [history,setHistory] = useState([]);
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <span></span>
        {history.map((his)=><HistoryCard/>
        )}

    </div>
};

export default History;