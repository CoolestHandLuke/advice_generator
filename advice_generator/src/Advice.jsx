const Advice = ({ id, advice }) => {
    return (
        <>
            <h5>Advice #117</h5>
            <p key={id}>"{advice}"</p>
            <div>
                <i className="fa-solid fa-pause pause"></i>
            </div>
            <button type="button" className="btn">
                <i className="fa-solid fa-dice-five dice"></i>
            </button>
        </>
    );
};
export default Advice;
