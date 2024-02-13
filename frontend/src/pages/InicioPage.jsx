import { useState } from 'react';
import Presentation from '../components/Presentation'
import SelectionUser from '../components/SelectionUser'

const InicioPage = () => {
    const [showComponent, setShowComponent] = useState(false);
    const handleEnter = () => {
        setShowComponent(true);
    }

    return (
        <div className="flex h-screen bg-color1 items-center justify-center">
            {!showComponent ? (
                <Presentation onEnter={handleEnter} />
            ) : (
                <SelectionUser />
            )}
        </div>
    )
}

export default InicioPage;