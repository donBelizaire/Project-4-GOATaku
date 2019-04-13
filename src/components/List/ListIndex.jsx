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
        const { top5 } = this.props.results;
        this.setState({ top5 });
      }

    handleChange = evt => {
      console.log(evt.currentTarget.name)
      console.log(evt.currentTarget.value)
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
        top5: ['lskdjfa;slkfja']
      })
    }
  
    handleRemove = index => {
      const newStateArray = [...this.state.top5]
      newStateArray.splice(index, 1)
      this.setState({ top5: newStateArray })
    }

    handlePrepareUpdate = index => {
        this.setState((state) => ({ 
          needsUpdate: true,
          updateText: state.top5[index].text 
        }))
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


        return (
            <div className="ListIndex">
                <h1>Welcome to your Top5</h1>
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