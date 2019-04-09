import React, {Component} from 'react'
import ListTab from './ListTab/ListTab'


class ListIndex extends Component {

    state = {
        text: "",
        updateText: "",
        top5: [],
        needsUpdate: false
      }
  
    handleChange = evt => {
      this.setState({ [evt.target.name]: evt.target.value })
    }
  
    handleSubmit = evt => {
      evt.preventDefault()
      const newStateArray = [...this.state.top5, {text: this.state.text}]
      this.setState({
        text: "",
        top5: newStateArray
      })
    }
  
    handleRemove = index => {
      const newStateArray = [...this.state.top5]
      newStateArray.splice(index, 1)
      this.setState({ top5: newStateArray })
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
        return (
            <div className="ListIndex">
                <h1>Welcome to your Top5</h1>
                <ListTab top5={this.state.top5}/>
            </div>
        )

    }

}


export default ListIndex;