import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wave } from '~/Components';
import images from '~/assets/images';
import { Home, LolMemo } from '~/pages';
import { useEffect, useState } from 'react';
import { useViewport } from '~/store';

const Header = () => {
    const [checked, setChecked] = useState(true);
    const viewPort = useViewport();
    const isTablet = viewPort.width <= 900;
    useEffect(() => {
        if (isTablet) {
            setChecked(false);
        }
    }, [isTablet]);
    return (
        <Wrapper>
            <div className="wiki">
                <Link to="/" element={<Home />}>
                    LOL WIKI
                </Link>
            </div>
            <div className="logo">
                <Link to="/" element={<Home />}>
                    <img src={images.logo} alt="" />
                </Link>
            </div>
            <div className="memo">
                <Link to="/lolMemo" element={<LolMemo />}>
                    LOL MEMO
                </Link>
            </div>
            <div className="waveStatus">
                <input type="checkbox" id="waveStatus" onChange={() => setChecked(!checked)} checked={checked} />
                <label htmlFor="waveStatus"></label>
            </div>
            {checked && <Wave />}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    /* background-image: linear-gradient(
        -90deg,
        var(--highlight),
        var(--white),
        var(--white),
        var(--white),
        var(--highlight)
    ); */
    backdrop-filter: blur(5px);
    box-shadow: 0 0 5px var(--highlight);

    a {
        font-size: 2rem;
        color: var(--highlight);
    }

    .logo {
        height: 100%;
        margin: 0 20px;
        img {
            height: 90%;
        }
    }

    .waveStatus {
        width: 30px;
        height: 10px;
        background: #333;
        margin: 20px auto;
        position: absolute;
        border-radius: 50px;
        transform: rotate(90deg);
        right: 0;
        box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.2);
        label {
            display: block;
            width: 16px;
            height: 16px;
            position: absolute;
            top: -3px;
            left: -3px;
            cursor: pointer;
            background: #fcfff4;
            background: linear-gradient(to bottom, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
            border-radius: 50px;
            box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
            transition: all 0.4s ease;
        }
        input[type='checkbox'] {
            visibility: hidden;
            &:checked + label {
                left: 17px;
            }
        }
    }
`;

export default Header;
