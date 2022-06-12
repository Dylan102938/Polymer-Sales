import './Loading.css';

const Loading = props => {
    return (
        <section className="wrapper" id="loading" style={props.additionalStyles}>
            <div className="spinner">
                <i></i>
                <i></i>
                <i></i>

            </div>
        </section>
    );
}

export default Loading;