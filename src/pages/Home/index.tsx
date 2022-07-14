import React from "react";
import * as S from "./styles"
import dados from "services/dados";
import { CardComponent } from "../../components";

const Home = () => {
    return (
        <S.Home>
            <aside>
                {dados && dados.map((item) => <CardComponent dados={item} />)}
            </aside>
        </S.Home>
    );
};

export default Home;
