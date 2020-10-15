import React from 'react';

import Loader from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className="loader">
            <Loader type="Puff" color="#00BFFF" height={200} width={200} />
        </div>
    )
}

export default Spinner