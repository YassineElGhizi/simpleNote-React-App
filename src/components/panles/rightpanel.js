import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';


const Rightpanel = () => {
    const [id, setId] = useState(null);
    const [content, setContent] = useState('');

    let handleWriting = (e) => {
        setContent(e.target.value)
    }

    return (<div>
        <Form.Control as="textarea" style={{height: '30rem'}} value={content} onChange={(e) => {
            handleWriting(e)
        }}/>
    </div>)
};

export default Rightpanel;