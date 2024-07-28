import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react';
import './Subscribe.css';

const Subscribe = () => (
    <Segment textAlign='center' className='subscribe-segment'>
        <div className='subscribe-container'>
            <p className='subscribe-text'>SIGN UP FOR OUR DAILY INSIDER</p>
            <div className='subscribe-input-button'>
                <Input 
                    placeholder='Enter your email' 
                    className='subscribe-input'
                />
                <Button className='subscribe-button'>Subscribe</Button>
            </div>
        </div>
    </Segment>
);

export default Subscribe;
