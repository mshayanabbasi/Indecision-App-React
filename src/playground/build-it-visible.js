class Visible extends React.Component {
    constructor(props) {
        super(props)
        this.handletoggleVisibility = this.handletoggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    } 
    handletoggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handletoggleVisibility}>{
                    this.state.visibility ? 'Hide details' : 'Show details'
                }</button>
                {this.state.visibility &&
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>}
            </div>
        )
    }
}
ReactDOM.render(<Visible />, document.getElementById('app'))



// console.log('Build it Visible')

// let visibility = false
// const clickHandler = () => {
//     visibility = !visibility
//     render()
// }
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={clickHandler}>
//             {
//                 visibility ? 'Hide details' : 'Show details'
//             }
//             </button>
//             {visibility && 
//             <div>
//                 <p>Hey. These are some details you can now see! </p>
//             </div>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }

// const appRoot = document.getElementById('app')
// render()