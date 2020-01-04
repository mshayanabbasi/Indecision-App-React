import React from 'react'
class AddOptions extends React.Component {

    state = {
        error: undefined
    }

    handleAddOptions = (e) => {
        e.preventDefault()
        console.log('testing')
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error }))
        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOptions}>
                    <input className="add-option-input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOptions