import React from 'react'
import line from './images/Component.png';

export default function BuildHydra() {
    return (
        <div className='build-divs'>
            <div>
                <h2>WHY BUILD</h2>
                <p>WITH HYDRA?</p>
            </div>
            <div className='none'>
                <img src={line} alt='' />
            </div>
            <div className='none'>
                <p className='build-txt'>
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </p>
            </div>
        </div>
    )
}
