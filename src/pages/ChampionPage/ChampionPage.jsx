import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useStore } from '~/store';

const ChampionPage = () => {
    const [champion, setChampion] = useState({});
    const [state, dispatch] = useStore();
    const { championPage } = state;
    console.log(championPage);
    useEffect(() => {
        axios
            .get(`http://ddragon.leagueoflegends.com/cdn/12.12.1/data/vn_VN/champion/${championPage}.json`)
            .then((res) => console.log(res.data.data));
    });
    return (
        <Wrapper>
            <div className="banner-header">
                <div className="bg-behind" style = {{background: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championPage}_0.jpg) top left / contain`}}>
                </div>
            <div className="bg-forward" style = {{background: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championPage}_0.jpg) center / cover no-repeat`}}></div>
            </div>
            <section>fakjsdlk</section>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top: 60px;
    
    .banner-header{
        position: relative;
        height: 800px;
         .bg-behind{
            height:100%;
            width: 100%;
        position: absolute;

        filter: blur(5px);
    }
    .bg-forward{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        height: 90%;
        width: 1200px;
        max-width: 100vw;
        

    }
    }

   
`;

export default ChampionPage;
