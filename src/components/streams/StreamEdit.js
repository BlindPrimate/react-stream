import React from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import { fetchStream, editStream } from '../../actions';
import _ from 'lodash';

class StreamEdit extends React.Component {
    onSubmit = (formValues) => {
        console.log(formValues)
    }
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    render() {
        console.log(_.pick(this.props.stream, 'title', 'description'))
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} to="/" initialValues={_.pick(this.props.stream, 'title', 'description')}  />
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