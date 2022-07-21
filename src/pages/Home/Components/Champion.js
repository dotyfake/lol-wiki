import { motion } from 'framer-motion';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaStar } from 'react-icons/fa';
import { useStore, actions } from '~/store';
import { useNavigate } from 'react-router-dom';

const Champion = ({ item }) => {
    const [state, dispatch] = useStore();
    const navigate = useNavigate();
    return (
        <Wrapper>
            <motion.div className="champion">
                <LazyLoadImage
                    alt={item.name}
                    src={item.loadURL}
                    effect="blur"
                    visibleByDefault={
                        item.loadURL ===
                        `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.name}_0.jpg`
                    }
                    onClick={() => {
                        navigate('/champion');
                        dispatch(actions.setChampionPage(item.name));
                        localStorage.setItem('currentChamp', `${item.name}`);
                    }}
                />
                <div
                    className={state.favorite.includes(item.data.name) ? 'favor active' : 'favor'}
                    onClick={() => {
                        dispatch(actions.setFavoriteChamp(item.data.name));
                    }}
                >
                    <FaStar /> {item.data.name}
                </div>
            </motion.div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    img {
        width: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
    }

    .champion {
        position: relative;
        cursor: pointer;

        .favor {
            position: absolute;
            bottom: 14px;
            width: 100%;
            text-align: center;
            padding: 10px 0;
            background-color: rgba(3, 3, 3, 0.6);

            &:hover {
                color: var(--highlight);
                background-color: rgba(100, 100, 100, 0.6);
            }

            &.active {
                font-size: 1.8rem;
                color: var(--highlight);
            }
        }
    }

    .champion:hover:before,
    .champion:hover:after {
        animation: none;
        opacity: 1;
    }

    .champion::before {
        content: '';
        width: 103%;
        height: 98%;
        border-radius: 8px;
        background-image: linear-gradient(var(--second), var(--highlight), var(--second));
        position: absolute;
        z-index: -1;
        top: -1%;
        left: -2%;
    }

    .champion::after {
        position: absolute;
        content: '';
        top: -9px;
        bottom: 18px;
        left: -10px;
        right: 0px;
        z-index: -1;
        margin: 0 auto;
        border-radius: 8px;
        filter: url(#wave);
        box-shadow: 0 0 10px var(--highlight), 0 0 30px var(--highlight), inset 0 0 10px var(--highlight);
        background-image: linear-gradient(var(--highlight), 15%, var(--highlight));
        opacity: 0;
        transition: opacity 0.5s;
    }
`;

export default Champion;
