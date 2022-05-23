import React from "react";

const ano = new Date;

function Footer(){
    return <footer><p>Copyright &copy; {ano.getFullYear()}</p></footer>;
}

export default Footer;