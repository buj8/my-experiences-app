import { ListGroup } from 'react-bootstrap';

function Ranking() {

    var exps = []

    for (var i = 1; i < (1 + parseInt(localStorage.getItem("nUsers"))); i++) {
        exps.push({ username: "U" + i, score: 0 });
        for (var j = 1; j < (1 + parseInt(localStorage.getItem("nExp"))); j++) {
            if (JSON.parse(localStorage.getItem("E" + j)).user === "U" + i) {
                exps[i - 1].score += JSON.parse(localStorage.getItem("E" + j)).likes.length;
            }
        }

    }
    exps.sort((a, b) => {
        return b.score - a.score;
    });

    function RankingItem(props) {
        var items = []
        var user;
        for (var i = 0; i < 10; i++) {
            user = JSON.parse(localStorage.getItem(props.exps[i].username))
            items.push(
                <ListGroup.Item>
                    {(i + 1) + "."}
                    <div className="rankData">

                        <img src={user.picture} width="80px" />
                        <a className="rankUserInfo"><strong>{user.name + " " + user.surname}</strong> {" (@" + user.username + ")"}</a>
                    </div>
                    <div className="rankScore">
                        {props.exps[i].score}
                    </div>
                </ListGroup.Item>)
        }
        return <>{items}</>;
    }

    return <ListGroup>
        <RankingItem exps={exps} />
    </ListGroup >

}


export default Ranking