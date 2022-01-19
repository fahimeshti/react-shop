import React from 'react';
import classes from './NewsLetter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const NewsLetter = () => {
    return (
        <div className={classes.container}>
            <h2>Newsletter</h2>
            <div className={classes.description}>
                <p>Get timely updates from your favorite products.</p>
                <div className={classes.inputBox}>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Your email here"
                    aria-label="Your email here"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                    Send <FontAwesomeIcon className={classes.my_icons} icon={ faPaperPlane } />
                    </Button>
                </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;