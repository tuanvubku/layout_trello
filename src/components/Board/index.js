import React, { Component } from "react";
import List from "../List/index";
import { connect } from "react-redux";
import AddButton from "../AddButton";
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { lists } = this.props;
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div style={styles.boardContainer}>
          {lists.map(list => (
            <List title={list.title} cards={list.cards} key={list.id} idList={list.id}/>
          ))}
          <AddButton list={true}/>
        </div>
      </div>
    );
  }
}
const styles = {
    boardContainer: {
        display: "flex",
        flexDirection: "row",
    }
}


const mapStateToProps = state => ({
  //return a array of lists in a board
  lists: state.lists
});
export default connect(mapStateToProps)(Board);
