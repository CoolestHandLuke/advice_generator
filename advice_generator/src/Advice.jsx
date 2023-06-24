const url = "https://api.adviceslip.com/advice";
const resp = await fetch(url);
const data = await resp.json();
const slip = data.slip;
const { id, advice } = slip;

const Advice = () => {
    return <p key={id}>"{advice}"</p>;
};
export default Advice;
