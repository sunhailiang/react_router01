import React from "react"
import actions from "../store/actions/counter"
import {Connect} from "../react-redux"
class Counter extends React.Component {
    render() {
        return (
            <div>
                {console.log("dddd",this.props)}
                <p id="counter">{this.props.counterReducer.num}</p>
                <button onClick={() => this.props.add(2)}>+</button>
                <button onClick={() => this.props.sub(3)}>-</button>
            </div>
        )
    }
}
let mapStateToProps=(state)=>state.counterReducer

const  resCounter=Connect(mapStateToProps,actions)(Counter)
export default resCounter