class LoadingPage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className=''>
                <img src='/images/load/loading.gif'/>
                <p>加载中......</p>
            </div>
        );
    }
};
class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            crumb:this.props.crumb,//'none',表示无面包屑，'crumb':有头部面包屑
            nav:this.props.nav,//底部导航，当前页面
            navConfig:this.props.navConfig,//底部导航，当前页面
            title: this.props.title,
            class:this.props.className,
            rightPart: this.props.rightPart,
            goBack:this.props.goBack,
            navRouterItems:[],//底部导航菜单
        };
    }
    componentWillMount(){
        if(this.state.nav&&this.state.navConfig){
            var navRouterItems=getNavRouters(this.state.navConfig);
            this.setState({navRouterItems:navRouterItems});
        }

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.goBack != this.state.goBack || nextProps.router != this.state.title) {
            this.setState({ goBack: nextProps.goBack, title: nextProps.title })
        }
    }
    goBack(){
        this.props.goBack?this.props.goBack(this):history.go(-1);
    }
    render() {
        return <div className={'pageContainer '+(this.state.class?this.state.class:'')}>
            {(this.state.crumb&&this.state.crumb!='none')&&(
                this.state.rightPart?
                    <CrumbCom title={this.state.title} rightPart={this.state.rightPart} goBack={this.goBack.bind(this)}></CrumbCom>:
                    <CrumbCom title={this.state.title} goBack={this.goBack.bind(this)}></CrumbCom>)
            }
            {this.props.children}
            {(this.state.navRouterItems.length!=0)&&<Nav routerItems={this.state.navRouterItems} nav={this.state.nav}/>}
        </div>
    }
}
class CrumbCom extends React.Component{
    /*react构造函数*/
    constructor(props){
        super(props);
        this.state={
            title: this.props.title,
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
        if (nextProps.goBack != this.state.goBack || nextProps.title != this.state.title) {
            this.setState({ goBack: nextProps.goBack, title: nextProps.title })
        }
    }
    goback() {
        history.go(-1);
    }
    render(){
        return <div className='crumbPart text-center halfpxline_after'>
            {this.state.goBack != false &&<div className='goback' onClick={this.goback}></div>}
            <div className='siteTitle'>{this.state.title}</div>
            {this.state.rightPart&&React.cloneElement(this.state.rightPart)}
        </div>
    }
};
class Nav extends React.Component{
    /*react构造函数*/
    constructor(props){
        super(props);
        this.state={
            nav:this.props.nav,
            routerItems: this.props.routerItems,
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
        if (nextProps.routerItems != this.state.routerItems) {
            this.setState({ routerItems: nextProps.routerItems })
        }
    }
    goback() {
        history.go(-1);
    }
    render(){
        return <nav className='nav-wrap '>
         <ul>
             {this.state.routerItems.map((item,index)=>{
                 return <li key={index} className={' '+(this.props.nav == item.nav? ' activeNav' : '')}>
                     <a href={item.url}>
                         <div className={'icon '+(item.className)}>{item.icon}</div>
                         <div className='title'>{item.title}</div>
                     </a>
                 </li>
             })}
         </ul>
        </nav>
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
        return <div className='radioBoxCom flex-box jc-c  ai-c' onClick={this.changeChecked.bind(this)}>
          {/*<span className='box '>{this.state.checked?<span className='inner'></span>:null}</span>*/}
            <span className={'box '+(this.state.checked?'checked ':'')}> </span>
          <span >{this.state.text}</span>
        </div>
    }
}