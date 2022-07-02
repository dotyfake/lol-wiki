import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Hexagon from 'react-hexagon';
import images from '~/assets/images';

import { useStore, actions } from '~/store';

const role = [
    {
        name: 'Marksman',
        title: 'Xạ thủ',
        id: 0,
        svg: images.Marksman,
        color: 'Aqua',
    },
    {
        name: 'Support',
        title: 'Hỗ trợ',
        id: 1,
        svg: images.Support,
        color: 'Crayola',
    },
    {
        name: 'Mage',
        title: 'Pháp sư',
        id: 2,
        svg: images.Mage,
        color: 'Charm',
    },
    {
        name: 'Assassin',
        title: 'Sát thủ',
        id: 3,
        svg: images.Assassin,
        color: 'Carmine',
    },
    {
        name: 'Tank',
        title: 'Đỡ đòn',
        id: 4,
        svg: images.Tank,
        color: 'Orange',
    },
    {
        name: 'Fighter',
        title: 'Đấu sĩ',
        id: 5,
        svg: images.Fighter,
        color: 'Yellow',
    },
];

const HexRotate = ({ currentRole, setCurrentRole, allChampions, setChampions }) => {
    const [nameRole, setNameRole] = useState('');
    const [state, dispatch] = useStore();

    useEffect(() => {
        if (currentRole.name === 'Tất cả') {
            setChampions(allChampions);
            return;
        } else if (currentRole.name === 'Yêu thích') {
            const favoriteChamps = state.favorite.reduce((prevChamp, currentChampion) => {
                const newChamp = allChampions.find((champ) => champ.name === currentChampion);
                currentChampion = [...prevChamp, newChamp];
                return currentChampion;
            }, []);
            console.log(favoriteChamps);
            setChampions(favoriteChamps);
        } else {
            const filterChampions = allChampions.filter((item) => item.data.tags.includes(nameRole));
            setChampions(filterChampions);
        }
    }, [currentRole.name]);
    return (
        <Filter currentRole={currentRole} setCurrentRole={setCurrentRole}>
            <div className="hex-rotate">
                <div className="hex">
                    <Hexagon className="hex-1" style={{ stroke: 'var(--highlight)', strokeWidth: '3' }}></Hexagon>
                    <Hexagon className="hex-2" style={{ stroke: 'var(--highlight)', strokeWidth: '1' }}></Hexagon>
                    <Hexagon className="hex-3" style={{ stroke: 'var(--highlight)', strokeWidth: '1' }}></Hexagon>
                    {role.map((item, i) => (
                        <div
                            key={i}
                            className={item.name + ' role' + (item.title === currentRole.name ? ' active' : '')}
                            onClick={() => {
                                let newRotate = item.id * -60;
                                if (currentRole.rotate === 0 && item.id === 5) {
                                    newRotate = 60;
                                } else if (currentRole.rotate === 0 && item.id === 4) {
                                    newRotate = 120;
                                }
                                setCurrentRole({ name: item.title, rotate: newRotate });
                                setNameRole(item.name);
                                dispatch(actions.setThermeColor(item.color));
                            }}
                        >
                            {item.svg}
                        </div>
                    ))}
                </div>
                <div className="box">
                    <div className="name">
                        {currentRole.name}
                        <div className="ring"></div>
                    </div>
                </div>
            </div>
        </Filter>
    );
};

const Filter = styled.div`
    position: relative;
    margin-top: 90px;
    overflow: hidden;

    .hex-rotate {
        position: relative;

        .hex {
            margin: 30px auto;
            position: relative;
            width: 300px;
            height: 300px;
            transition: all 0.4s linear;
            transform: ${(props) => `rotate(${props.currentRole.rotate}deg)`};
        }
        .hex-1 {
            position: absolute;
            top: 0;
            left: 0;
            width: 300px;
            height: 300px;
        }
        .hex-2 {
            transform: scale(0.97);
            position: absolute;
            top: 0;
            left: 0;
            width: 300px;
            height: 300px;
        }
        .hex-3 {
            transform: scale(0.7);
            position: absolute;
            top: 0;
            left: 0;
            width: 300px;
            height: 300px;
        }
        .role {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            position: absolute;
            padding: 0 12px;
            cursor: pointer;
            z-index: 2;
            background-color: var(--black);
            box-sizing: content-box;
            svg {
                fill: var(--white);
            }
            &.active {
                /* text-shadow: 0 0 2px var(--highlight), 0 0 4px var(--highlight), 0 0 8px var(--highlight); */
                svg {
                    filter: drop-shadow(0 0 8px var(--highlight));
                    transform: scale(1.2);
                    fill: var(--highlight);
                }
            }
        }

        .Marksman {
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
        }

        .Support {
            top: 19%;
            right: -6px;
            transform: rotate(60deg);
        }
        .Mage {
            top: 65%;
            right: -4px;
            transform: rotate(120deg);
        }
        .Assassin {
            bottom: -16px;
            right: 50%;
            transform: rotate(180deg) translateX(-50%);
        }

        .Tank {
            bottom: 19%;
            left: -5px;
            transform: rotate(240deg);
        }

        .Fighter {
            bottom: 65%;
            left: -5px;
            transform: rotate(300deg);
        }
    }
    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 3rem;
        transform: translate(-50%, -50%);
        .name {
            transition: all 0.4s linear;
            text-transform: uppercase;
            position: relative;
            .ring {
                position: absolute;
                top: -10px;
                left: -18px;
                right: -10px;
                bottom: -5px;
                z-index: -1;
                box-shadow: 0 0 10px var(--highlight), 0 0 50px var(--highlight), inset 0 0 10px var(--highlight),
                    inset 0 0 50px var(--highlight);
                filter: url(#wave);
            }
        }
    }
    .options {
        svg {
            fill: var(--white);
            font-size: 4rem;
        }
    }
    .search {
        display: flex;
        align-items: center;
        background-color: var(--white);

        button {
            background-color: transparent;
            border: none;
            cursor: pointer;
            svg {
                fill: var(--black);
                font-size: 1.7rem;
            }

            &:hover svg {
                fill: var(--highlight);
            }
        }

        input {
            width: 140px;
            padding-left: 7px;
            color: var(--black);
            outline: none;
            border: none;
            font-size: 1.8rem;
            background-color: transparent;
        }
    }
`;

export default HexRotate;
