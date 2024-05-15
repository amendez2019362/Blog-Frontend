import { useEffect } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Content } from "../../components/dashboardPage/Content";
import { usePublication } from "../../shared/usePublication";
import { LoadSpinner } from "../../components/LoadSpinner";
import { useLocation } from "react-router-dom";
import '../style.css';

export const HomePage = () => {
    const { getPublication, allPublication, isFetching } = usePublication();
    const location = useLocation();

    useEffect(() =>{
        getPublication();
    }, []);

    if(isFetching){
        return <LoadSpinner/>;
    }

    const showBanner = location.pathname === '/';

    return (
        <div>
            <Navbar/>
            <Content publication={allPublication} getPublication={getPublication}/>
        </div>
    );
};
