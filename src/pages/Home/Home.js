import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaSearch, FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import Champion from './Components/Champion';
import { motion } from 'framer-motion';
import HexRotate from './Components/HexRotate';

const Home = () => {
    const [currentRole, setCurrentRole] = useState({ name: 'Tất cả', rotate: 0 });
    const [allChampions, setAllChampions] = useState([]);
    const [champions, setChampions] = useState([]);
    const [inputSearch, setInputSearch] = useState('');
    console.log(allChampions.filter((item) => item.name.toUpperCase().includes(''.toUpperCase())));

    useEffect(() => {
        axios.get('http://ddragon.leagueoflegends.com/cdn/12.12.1/data/vn_VN/champion.json').then((res) => {
            const data = Object.entries(res.data.data);
            const newData = data.map((item) => ({
                name: item[0],
                loadURL: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item[0]}_0.jpg`,
                data: item[1],
            }));
            setAllChampions(newData);
            setChampions(newData);
        });
    }, []);

    return (
        <div className="wide">
            <Wrapper currentRole={currentRole}>
                <HexRotate
                    currentRole={currentRole}
                    setCurrentRole={setCurrentRole}
                    allChampions={allChampions}
                    setChampions={setChampions}
                ></HexRotate>
                <div className="filter">
                    <div className="options">
                        <button
                            className={currentRole.name === 'Tất cả' ? 'active item' : 'item'}
                            onClick={() => {
                                setCurrentRole({ ...currentRole, name: 'Tất cả' });
                            }}
                        >
                            Tất cả tướng
                        </button>
                        <button
                            className={currentRole.name === 'Yêu thích' ? 'active favor item' : 'favor item'}
                            onClick={() => {
                                setCurrentRole({ ...currentRole, name: 'Yêu thích' });
                            }}
                        >
                            <div>
                                <FaStar />
                            </div>
                            <span> Yêu thích</span>
                        </button>
                        <div className="search item">
                            <button>
                                <FaSearch />
                            </button>
                            <input
                                type="text"
                                placeholder="Tìm tướng"
                                value={inputSearch}
                                onChange={(e) => {
                                    setInputSearch(e.target.value);
                                    const payload = allChampions.filter((item) =>
                                        item.name.toUpperCase().includes(e.target.value.toUpperCase()),
                                    );
                                    setChampions(payload);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <motion.div className="list-champions">
                    {champions.length > 0 && champions.map((item, i) => <Champion key={i} item={item} />)}
                </motion.div>
            </Wrapper>
        </div>
    );
};

const Wrapper = styled.div`
    .list-champions {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-column-gap: 2rem;
        grid-row-gap: 0.5rem;
        margin: 30px 0;
    }
    .filter {
        padding: 10px;
        margin: 30px 0;

        border-top: 1px solid var(--highlight);
        border-bottom: 1px solid var(--highlight);

        .options {
            display: flex;
            justify-content: space-around;
            .item {
                color: var(--white);
                cursor: pointer;
                background-color: transparent;
                border: none;
                font-size: 1.8rem;
                width: 33%;
                display: flex;
                justify-content: center;

                &.active {
                    font-size: 2rem;
                    color: var(--highlight);
                    text-shadow: 0 0 4px var(--highlight);
                }
            }

            .favor {
                display: inline-flex;
                align-items: center;

                &.active {
                    font-size: 2rem;
                    color: var(--highlight);
                    text-shadow: 0 0 4px var(--highlight);
                }

                svg {
                    margin-right: 5px;
                }
            }
        }

        .search {
            display: inline-flex;
            button,
            input {
                background-color: transparent;
                color: var(--white);
                border: none;
                font-size: 1.8rem;
            }
            input {
                width: 100px;
            }
        }
    }
`;

export default Home;
