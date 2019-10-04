import React, {Component} from 'react';

class QuerySection extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#498bdc', height: '176px', color: 'white', paddingTop: '45px'}}>
                <h3 style={{width: 'fit-content', margin: 'auto', fontWeight: 'bolder'}}>Can’t find what you’re looking for?</h3>
                <p style={{width: 'fit-content', margin: 'auto'}}>E-mail your query at <strong>support@queuebuster.co</strong></p>
            </div>
        )
    }
}

export default QuerySection;