import React, { useState, useEffect } from 'react'

function Effect(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect called');
        console.log('count:', count);
        console.log('name:', name);
    }, []); // Only re-run the effect if count or name changes

    console.log('Name:', name);
    return (
        <div>
            <h2>UseEffect Example</h2>
            <div>
                <button onClick ={() => setCount(count + 1)}>
                    Increment Count
                </button>
            </div>
            <div>
                <button onClick={() => setName('New Name')}>
                    Change Name
                </button>
            </div>

        </div>
    );
}
export default Effect;