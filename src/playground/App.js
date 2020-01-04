



// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOption}>What should I do?</button>
        </div>
    )
}

// class Action extends React.Component {
   
//     render () {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOption}>What should I do?</button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button> 
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {props.options.map((option) => {
                return <Option 
                key={option} 
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}/>
            })}
        </div>
    )
}

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => {
//                         return <Option key={option} optionText={option}/>
//                     })
//                 }
//             </div> 
//         )
//     }
// }



// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 Option: {this.props.optionText}
//             </div>
//         )
//     }
// }






































// console.log('App is running!')

// // JSX - Javascript XML

// const app = {
//     title: 'Indecision App',
//     subtitle: 'Put your life in the hands of a computer',
//     options: []
// }
// const submitHandler = (e) => {
//     e.preventDefault()
//     const option = e.target.elements.option.value
//     if (option) {
//         app.options.push(option)
//         e.target.elements.option.value = ''
//         render()
//     }
//     console.log(option)
// }

// const user = {
//     name: 'Mike',
//     age: 26,
//     location: 'Philadelphia'
// }
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>
//     }
// }
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {( user.age && user.age >= 18 ) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// )


// // console.log(templateThree)

// const appRoot = document.getElementById('app')

// const onRemoveAll = () => {
//     app.options = []
//     render()
//     console.log('remove all')
// }

// const onMakeRandom = () => {
//     const randomNumber = Math.floor(Math.random() * app.options.length)
//     const option = app.options[randomNumber]
//     alert(option)
// }

// const render = () => {
//     const template = ( 
//         <div>
//             <h1>{app.title}</h1> 
//             {app.subtitle && <p>{app.subtitle}</p>}
//             <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//             <button disabled={app.options.length === 0} onClick={onMakeRandom}>What should I do?</button>
//             <button onClick={onRemoveAll}>Remove All</button>
//             <ol>
//                 {app.options.map((option) => {
//                     return <li key={option}>{option}</li>
//                 })}
//             </ol>
//             <form onSubmit={submitHandler}>
//                 <input type="text" name="option"/>
//                 <button>Add option</button>
//             </form>
//         </div>
//     )
//     ReactDOM.render(template, appRoot) 
// }
// render()

