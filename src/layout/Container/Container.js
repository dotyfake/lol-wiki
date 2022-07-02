import { Routes, Route } from 'react-router-dom';
import { Home, LolMemo } from '~/pages';

const Container = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lolMemo" element={<LolMemo />} />
            </Routes>
        </div>
    );
};

export default Container;
