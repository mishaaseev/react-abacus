import PlayerName from "../PlayerName/PlayerName";
import Row from "../Row/Row";

export default function Player(props) {

    let dec = Math.floor(props.score / 10);
    let sin = props.score % 10;
    return (
        <>

            <div className={"player w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 " + (props.disabled ? "disabled" : "")}>
                <PlayerName name={props.name} score={props.score} onRemovePlayer={props.onRemovePlayer} onChangeName={props.onChangeName}></PlayerName>
                <div className="flex items-center justify-center mb-2">
                    Score: {props.type === "abacus" ? props.score : ""}
                </div>
                <div className="relative flex items-center justify-center ">
                    {
                        props.type === "abacus" ? <div className="rows">
                            <Row count={dec}></Row>
                            <Row count={sin}></Row>
                        </div> :
                            <div className="relative flex items-center justify-center text-7xl">
                                {props.score}
                            </div>
                    }
                    <button className="absolute h-full left-0 top-0 w-1/2 opacity-0" onClick={props.onDecrease}>-</button>
                    <button className="absolute h-full right-0 top-0 w-1/2 opacity-0" onClick={props.onIncrease}>+</button>
                </div>


            </div>

        </>



    );
}