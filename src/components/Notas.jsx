import React from "react";

function Notas(props){
    return<div className = "note">
        <h1>{props.titulo}</h1>
        <p>{props.conteudo}</p>
    </div>;
}

export default Notas;