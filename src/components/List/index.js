import React from 'react'
import TrelloCard from '../Card/index'
import AddButton from '../AddButton'

const styles = {
    container: {
        backgroundColor: '#ccc',
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8,
        height: '100%'
    },
    styleHeader: {
        margin: 5,
        marginBottom: 10
    }
}
const List = (props) => {
    const {cards,idList} = props
    return ( 
    <div style={styles.container}>
        <h4 style={styles.styleHeader}>{props.title}</h4>
        {cards.map(card => <TrelloCard key={card.id}  content={card.content} />)}
        
        <AddButton idList={idList}/>
    </div> );
};


export default List;