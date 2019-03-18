import React from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import { fetchStream, editStream } from '../../actions';
import _ from 'lodash';

class StreamEdit extends React.Component {
    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} to="/" initialValues={this.props.stream}  />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);