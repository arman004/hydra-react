import React from 'react'
import line from './images/Component.png'

export default function Introduction() {
    return (
        <div className='intro'>
            <div>
                <h2>INTRODUCTION</h2>
                <p>TO HYDRA VR</p>
            </div>
            <div className='none'>
                <img src={line} alt='' />
            </div>
            <div className='none'>
                <p>
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat<br/>
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo<br/>
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare<br/>
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </p>
            </div>
        </div>
    )
}
