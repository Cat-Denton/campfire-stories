import React from 'react';
import { v4 } from 'uuid';

function NewEntryForm() {
    return (
        <React.Fragment>
            <form>
                <textarea
                    rows="18"
                    cols="76"
                    name='entry'
                    placeholder='What twists and turns do you have in store for this tale?' />
                <br />
                <button type='submit'>Continue this tale</button>
            </form>
        </React.Fragment>
    )
}

export default NewEntryForm;