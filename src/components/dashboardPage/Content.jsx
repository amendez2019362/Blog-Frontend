import { Route, Routes } from "react-router-dom";
import { PublicationList } from "../publications/PublicationList";
import { AddPublication } from "../publications/CreatePublication"

export const Content = ({ publication }) => {
    return (
        <div className="">
            <Routes>
                <Route path="/publication" element={<PublicationList publication={publication} />}/>
                <Route path="/publication/create" element={<AddPublication publication={publication} />}/>
            </Routes>
        </div>
    );
};