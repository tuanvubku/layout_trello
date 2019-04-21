import React,{Component} from 'react'
import Icon from '@material-ui/core/Icon' 
import Card from '@material-ui/core/Card'
import Textarea from 'react-textarea-autosize'
import Button from '@material-ui/core/Button'
import addList from '../../action/listAction'
import addCard from '../../action/cardAction'
import {connect} from 'react-redux'
class AddButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            formOpen: false,
            text: ""
         };
         this.handleInputChange = this.handleInputChange.bind(this)
    }

    openForm = () => {this.setState({
        formOpen: true
    })}

    closeForm = () => {this.setState({
        formOpen: false
    })}

    handleInputChange(e){
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {
        const {text} = this.state;
        const {dispatch} = this.props;
        if(text){
            dispatch(addList(text))
            this.setState({
                text: ""
            })
        }
        return;
    }

    handleAddCard = () => {
        const {text} = this.state;
        const {dispatch,idList} = this.props;
        if(text){
            dispatch(addCard(text,idList))
            this.setState({
                text: ""
            })
        } 
        return;
    }
    renderAddButton(){
        const {list} = this.props;
        const buttonText = list ? "Thêm danh sách khác" : "Thêm thẻ khác";
        const textOpacity = list ? 1 : 0.5;
        const textColor = list ? "while" : "inherit"
        const buttonBackground = list ? "rgba(0,0,0,.15)" : "inherit";
        return (    
            <div onClick={this.openForm}  
                style={{
                ...styles.openFormButtonGroup,
                opacity: textOpacity,
                color: textColor,
                backgroundColor: buttonBackground
            }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }
    renderCard(){
        const {list} = this.props;
        const placeHolder = list ? "Nhập tiêu đề danh sách" : "Nhập tiêu đề cho thẻ";
        const buttonTitle = list ? "Thêm danh sách" : "Thêm thẻ";
        return (
            <div>
                <Card  style={{
                    minHeight: 65,
                    minWidth: 272,
                    padding: '6px 8px 2px'
                }}>
                    <Textarea placeholder={placeHolder} autoFocus 
                    onBlur={this.closeForm}
                    value={this.state.text} onChange={this.handleInputChange}
                    style={{
                        resize: 'none',
                        width: '100%',
                        outline: 'none',
                        border: 'none',
                        overflow: 'hidden'
                    }}/>
                </Card> 
                <div style={styles.formButtonGroup}>
                <Button variant="contained" 
                        onMouseDown={list ? this.handleAddList: this.handleAddCard}
                        style ={{color: "white", backgroundColor:"#5aac44"}}>{buttonTitle}</Button>
                    <Icon style={{
                        marginLeft: 8,
                        cursor: "pointer"
                    }}>close</Icon>    
                </div>           
            </div>
        )
    }
    render() { 
        return this.state.formOpen ? this.renderCard() : this.renderAddButton();
    }
}

const styles = {
    openFormButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius : 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center'
    }
}
export default connect()(AddButton);