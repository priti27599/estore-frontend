import { Route, Routes } from 'react-router-dom';
import MainCon from "./MainCon/MainCon"


const LandingPage = () => {
    return (
        <div>
            <Routes>
                <Route path="/" Component={MainCon} />
            </Routes>
        </div>
    )
}

export default LandingPage;