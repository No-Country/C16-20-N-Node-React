import PropTypes from 'prop-types';

const Presentation = ({ onEnter }) => {
    return (
        <div className="flex flex-col min-w-80 max-w-xs items-center justify-center bg-color1 w-1/2">
            <div className="w-32 h-32 bg-color2 rounded-full flex"></div>
            <p className="mt-12 text-2xl font-bold">Anhrt</p>
            <p className="mt-2 mb-12 text-xl">Plataforma de comida</p>
            <button onClick={onEnter} className="w-3/4 p-3 bg-color2 text-xl">Entrar</button>
        </div>
    )
}

Presentation.propTypes = {
    onEnter: PropTypes.func.isRequired,
};

export default Presentation;