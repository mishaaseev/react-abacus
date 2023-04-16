export default function Player(props) {
    let dec = Math.floor(props.score / 10);
    let sin = props.score % 10;
    console.log(dec, sin);
    return (
        <div className="player">
            <div className="score">{props.name} : {props.score}</div>
            <div className="abacus">
                <div className="row">
                    <div className="line"></div>
                    <div className="left">
                        {
                            Array(10 - dec).fill(0).map(() => <div className="nut"></div>)
                        }
                    </div>

                    <div className="right">
                        {
                            Array(dec).fill(0).map(() => <div className="nut"></div>)
                        }

                    </div>

                </div>

                <div className="row">
                <div className="line"></div>
                    <div className="left">
                        {
                            Array(10 - sin).fill(0).map(() => <div className="nut"></div>)
                        }
                    </div>

                    <div className="right">
                        {
                            Array(sin).fill(0).map(() => <div className="nut"></div>)
                        }

                    </div>

                </div>
            </div>
            <div className="actions">
                <button onClick={props.onDecrease}>-</button>
                <button onClick={props.onIncrease}>+</button>
            </div>
        </div>
    )
}