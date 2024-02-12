import React, { useState } from 'react';
import Presentation from '../components/Presentation'
import SelectionUser from '../components/SelectionUser'

const HomePage = () => {
    const [showComponent, setShowComponent] = useState(false);
    const handleEnter = () => {
        setShowComponent(true);
    }

    return (
        <>
            {!showComponent ? (
                <Presentation onEnter={handleEnter} />
            ) : (
                <SelectionUser />
            )}
        </>
    )
}

export default HomePage;