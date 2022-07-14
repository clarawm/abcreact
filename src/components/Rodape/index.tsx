import React from "react";
import {BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs";
import * as S from "./styles";

const Rodape = () => {
    return (
        <S.Rodape>
            <div className="content">
                <a href="https://fecebook.com" target="_blank" rel="noreferrer">
                    <BsFacebook />
                </a>
                <a href="https://intagram.com" target="_blank" rel="noreferrer">
                    <BsInstagram />
                </a>
                <a href="http://likedin.com" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                    </a>
            </div>
        </S.Rodape>
    );
};

export default Rodape;