class LoginPage extends  React.Component{
  constructor(props){
      super(props);
      this.state={
        username:'',
        password:'',
        remember:false,
      }
  }
    componentWillMount(){

    }
    componentDidMount(){

    }
    changeChecked(name){
      var obj={}
      obj[name]=!this.state[name];
      this.setState(obj);
    }
    render(){
      return <div className='loginPage noScrollDiv'>
        <div className='login-wrap'>
           <div className='logo'></div>
           <div className='form-wrap'>
             <div className='input-wrap'><input type='text' id='username' placeholder='请输入手机号'/></div>
             <div className='input-wrap'><input type='text' id='username' placeholder='请输入密码'/></div>
             <div className='input-wrap flex-box jc-s ai-c'>
                 <div><CheckBoxCom checked={this.state.remember} text='记住用户名和密码' changeChecked={this.changeChecked.bind(this,'remember')}/></div>
                 <div><a href="">忘记密码</a></div>
             </div>
               <div className='button-wrap flex-box jc-s ai-c'>
                 <div><button>登录</button></div>
                 <div><button>注册</button></div>
             </div>
           </div>
        </div>
      </div>
    }
}