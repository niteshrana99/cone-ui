import React from 'react';
import M from 'materialize-css';
const WithErrorHandler = (WrappedCompnent) => {
    return class extends React.Component {
        alertMessages = {
            error: message => M.toast({html: message, classes:'error'}),
            success: message => M.toast({html: message, classes:'success'}),
            info: message => M.toast({html: message, classes:'info'})
        }

        render() {
            return (
                <React.Fragment>
                <WrappedCompnent alertMessages={this.alertMessages} />
                </React.Fragment>
            )
        }
    }
}

export default WithErrorHandler
