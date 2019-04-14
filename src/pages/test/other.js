import React, {Component} from 'react';

const ThemeContext = React.createContext('light')

class Other extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liao: 2
        }
        this.handClick = this.handClick.bind(this)

    }

    handClick() {
        this.refs.myInput.focus();
    }

    render() {
        return (
            <Toolbar></Toolbar>
        )
        // return (
        //     <table>
        //         <thead></thead>
        //         <tbody>
        //             <tr>
        //                 <Columns></Columns>
        //             </tr>
        //         </tbody>
        //     </table>
        // )
        // return (
        //     <div>
        //         <input type="text" ref="myInput"/>
        //         <input type="button" value="cccccc" onClick={this.handClick.bind(this)}/>
        //     </div>
        // )
        // return (
        //     <ThemeContext.Provider value="dark">
        //         <Toolbar onClick={this.handClick}/>
        //         <FancyButton ref={ref}>click me!!!</FancyButton>
        //     </ThemeContext.Provider>
        // )
    }
}

class Columns extends Component {
    render() {
        return (
            <>
                <td>1</td>
                <td>13</td>
            </>
        )
    }
}

function Toolbar(props) {
    const [count, setCount] = React.useState([{ text: '学习 Hook' }]);
    // React.useEffect(() => {
    //     document.title = count
    // })
    return (
        <div>
            {/*<ThemedButton/>*/}
        </div>
    );
}

const FancyButton = React.forwardRef((props, ref) => {
    return (
        <button ref={ref} className="FancyButton">
            {props.children}
        </button>
    )
})

const ref = React.createRef()

class ThemedButton extends Component {
    static contextType = ThemeContext;
    state = {
        liao: 1
    }

    render() {
        return <button theme={this.context} onClick={this.props.onClick}> {this.state.liao} </button>
    }

    componentWillMount() {
        console.log(this);
    }
}

export default Other
