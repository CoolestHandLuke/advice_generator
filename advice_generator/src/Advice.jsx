const Advice = ({ id, advice, fetchData }) => {
    return (
        <>
            <h5>Advice #{id}</h5>
            <p key={id}>"{advice}"</p>
            <div>
                <i className="fa-solid fa-pause pause"></i>
            </div>
            <button type="button" className="btn" onClick={() => fetchData()}>
                <i className="fa-solid fa-dice-five dice"></i>
            </button>
        </>
    );
};
export default Advice;
