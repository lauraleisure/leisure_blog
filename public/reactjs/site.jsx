class LoadingPage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className=''>
                <img src='/images/load/loading.gif'/>
                <p>卖力加载中......</p>
            </div>
        );
    }
};

class CrumbCom extends React.Component{
    /*react构造函数*/
    constructor(props){
        super(props);
        this.state={
            router: this.props.router,
            rightPart: this.props.rightPart,
            goBack: this.props.goBack
        }
    }
    /*react生命周期-页面渲染之前调用*/
    componentWillMount(){

    }
    /*react生命周期-页面渲染完毕后调用：一般用于填写外部插件的配置代码*/
    componentDidMount(){

    }
    /*子组件与父组件之间传值时，如果传递的值有改变时调用*/
     componentWillReceiveProps(nextProps) {
        if (nextProps.goBack != this.state.goBack || nextProps.router != this.state.router) {
            this.setState({ goBack: nextProps.goBack, router: nextProps.router })
        }
    }
    goback() {
        history.go(-1);
    }
    render(){
        return <div className='crumbPart text-center halfpxline_after'>
            {this.state.goBack != false &&<div className='goback' onClick={this.goback}></div>}
            <div className='siteTitle'>{this.state.router}</div>
            {this.state.rightPart&&React.cloneElement(this.state.rightPart)}
        </div>
    }
};

class CheckBoxCom extends React.Component{
    constructor(props){
        super(props);
        this.state={
            checked: this.props.checked,
            text: this.props.text,
        }
    }
    /*子组件与父组件之间传值时，如果传递的值有改变时调用*/
    componentWillReceiveProps(nextProps) {
        if (nextProps.checked != this.state.checked ) {
            this.setState({ checked: nextProps.checked});
        }
    }
    changeChecked(){
        this.props.changeChecked?this.props.changeChecked(this):null
    }
    render(){
        return <div className={'checkBoxCom flex-box ai-c '} onClick={this.changeChecked.bind(this)}>
          <span className={'box '+(this.state.checked?'checked ':'')}></span>
          <span >{this.state.text}</span>
        </div>
    }
}

class RadioBoxCom extends React.Component{
    constructor(props){
        super(props);
        this.state={
            checked: this.props.checked,
            text: this.props.text,
        }
    }
    /*子组件与父组件之间传值时，如果传递的值有改变时调用*/
    componentWillReceiveProps(nextProps) {
        if (nextProps.checked != this.state.checked ) {
            this.setState({ checked: nextProps.checked});
        }
    }
    changeChecked(){
        this.props.changeChecked?this.props.changeChecked(this):null
    }
    render(){
        return <div className='radioBoxCom' onClick={this.changeChecked.bind(this)}>
          <span className='box '>{this.state.checked?<span className='inner'></span>:null}</span>
          <span >{this.state.text}</span>
        </div>
    }
}