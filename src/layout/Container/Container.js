import { Routes, Route } from 'react-router-dom';
import { Home, LolMemo, ChampionPage } from '~/pages';

const Container = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lolMemo" element={<LolMemo />} />
                <Route path="/champion" element={<ChampionPage />} />
            </Routes>
        </div>
    );
};

export default Container;
