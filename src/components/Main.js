import React from 'react';

import Komentar from './Komentar'
import utisci from '../data/utisci.json'



const mapirani = utisci.map((obj, i) => 
<Komentar ime={obj.ime} utisak={obj.utisak}/>

);


function Main() {
    return (
        <main>
            <h2>UTISCI MUSTERIJA</h2>
            {mapirani}            
        </main>
    )
}

export default Main