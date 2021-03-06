import React, {Component} from 'react'
import ListTab from './ListTab/ListTab'


class ListIndex extends Component {
    state = {
        text: "",
        updateText: "",
        top5: [],
        needsUpdate: false
    }
    
    componentDidMount() {
        // const { top5 } = this.props.results;
        // this.setState({ top5 });
        this.setState({top5: this.props.results});

      }

    handleChange = evt => {
      console.log(evt.currentTarget.name)
      console.log(evt.currentTarget.value)
      console.log(this.state.text)
      this.setState({
         [evt.currentTarget.name]: evt.currentTarget.value 
        })
    }
  
    handleSubmit = evt => {
      evt.preventDefault()
      const newStateArray = [...this.state.top5, {text: this.state.text}]
      const newState = this.state.top5.push(this.state.text)
      console.log('state ', this.state.top5)
      console.log(newState)
      console.log(newStateArray)
      this.setState({
        text: "",
        top5: []
      })
    }
  
    handleRemove = index => {
      const newStateArray = [...this.props.results]
      newStateArray.splice(index, 1)
      this.setState({ top5: newStateArray })
    }

    handlePrepareUpdate = evt => {
        evt.preventDefault()
        this.setState((state) => ({ 
          needsUpdate: true,
          updateText: state.top5.text, 
          text: ""
        }))
        console.log(this.state.updateText)
        console.log(this.state.text)
    }
    
      handleUpdate = evt => {
        evt.preventDefault()
        const newStateArray = [...this.state.top5]
        const updateTop5Idx = newStateArray.findIndex(elm => (
          elm.text === this.state.updateText
          ))
        newStateArray.splice(updateTop5Idx, 1, {text: this.state.updateText})
        this.setState({top5: newStateArray, needsUpdate: false, updateText: ""})
      }

    render() {
        console.log(this.props.results);
        console.log(this.state.top5);


        return (
            <div className="ListIndex">
                <h1>Welcome to GOATaku</h1>
                <ListTab
                updateText={this.state.updateText}
                text={this.state.text} 
                top5={this.props.results} 
                handleRemove={this.handleRemove}
                handlePrepareUpdate={this.handlePrepareUpdate}
                handleChange={this.handleChange} 
                handleUpdate={this.handleUpdate} 
                handleSubmit={this.handleSubmit}
                />
            </div>
        )

    }

}


export default ListIndex;