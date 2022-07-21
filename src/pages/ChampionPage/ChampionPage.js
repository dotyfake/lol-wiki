import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useStore } from '~/store';

const ChampionPage = () => {
    const [champion, setChampion] = useState({});
    const [state, dispatch] = useStore();
    const { championPage } = state;
    useEffect(() => {
        axios
            .get(`http://ddragon.leagueoflegends.com/cdn/12.12.1/data/vn_VN/champion/${championPage}.json`)
            .then((res) => console.log(res.data.data));
    });
    return (
        <Wrapper>
            <section>fakjsdlk</section>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top: 80px;
`;

export default ChampionPage;
