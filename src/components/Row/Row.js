export default function Row({ count }) {
    return (

        <div className="row">
            <div className="line"></div>
            <div className="left" title="left">
                {
                    Array(10 - count).fill(0).map((val, i) => <div key={i} className="nut"></div>)
                }
            </div>

            <div className="right" data-testid='right-bunch'>
                {
                    Array(count).fill(0).map((val, i) => <div key={i} className="nut"></div>)
                }

            </div>

        </div>

    )
}