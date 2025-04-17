import React from 'react';
import Poster from './Poster';
import MoreInfoDetails from './MoreInfoDetails';
import Header from './Header';

const MoreInfo = () => {
    return (
        <div className="w-full h-screen bg-black text-white min-h-screen overflow-hidden flex flex-col">
            <Header />
            <div className="flex w-full h-[90%] p-10 gap-x-40 mt-[5%]">
                <div className="w-1/5 flex items-center justify-center">
                    <Poster />
                </div>
                <div className="w-4/5 p-4 overflow-y-auto">
                    <MoreInfoDetails movie={JSON.parse(localStorage.getItem('mainMovie'))} />
                </div>
            </div>
        </div>
    );
};

export default MoreInfo;
