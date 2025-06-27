/** @format */

import React, { useState } from 'react';
import { fetchNui } from '../utils/fetchNui';
import { useNuiEvent } from '../hooks/useNuiEvent';

const App: React.FC = () => {
    const [visible, setVisible] = useState(true);

    return (
        visible && <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center p-8 space-y-6'></div>
    );
};

export default App;
