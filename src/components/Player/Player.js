import PlayerName from "../PlayerName/PlayerName";
import Row from "../Row/Row";

export default function Player(props) {

    let dec = Math.floor(props.score / 10);
    let sin = props.score % 10;
    return (
        <div className={"player " + (props.disabled ? "disabled" : "")} className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <PlayerName name={props.name} score={props.score} onRemovePlayer={props.onRemovePlayer} onChangeName={props.onChangeName}></PlayerName>
            <div className="player-actions">
                <div className="rows">
                    <Row count={dec}></Row>
                    <Row count={sin}></Row>
                </div>
                <button className = "action-button action-button__left" onClick={props.onDecrease}>-</button>
                <button className = "action-button action-button__right" onClick={props.onIncrease}>+</button>
            </div>
        </div>
    )
}