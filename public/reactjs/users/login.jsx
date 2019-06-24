class LoginPage extends  React.Component{
  constructor(props){
      super(props);
      this.state={
        username:'',
        password:'',
        markRead:true,
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
    doLogin(){
      // reloadPage(0.01,'/users/home');
        var postData={
            username:this.state.username,
            password:this.state.password
        }
        ajaxUtil_notoken('/api/users/login','POST',postData).then(function (data) {
           console.log('登陆',data);
            
        }).catch(function (err) {
            
        });
    }
    changeValue(e){
      var obj={}
      obj[e.target.id]=e.target.value;
      this.setState(obj);
    }
    render(){
      return <div className='loginPage noScrollDiv'>
        <div className='login-wrap'>
           <div className='login_header'>
               <div className='logo'></div>
               <div className='title_gt text-left'>领先的主动营销产品</div>
               <div className='title_lt text-left'>
                   挖掘营销潜力 传播无限可能
               </div>
           </div>
           <div className='form-wrap'>
             <div className='input-wrap'><input type='text' id='username' placeholder='请输入手机号' onChange={this.changeValue.bind(this)}/></div>
             <div className='input-wrap'><input type='password' id='password' placeholder='请输入密码' onChange={this.changeValue.bind(this)}/></div>
             <div className='input-wrap flex-box jc-e ai-c'>
              {/*   <div><CheckBoxCom checked={this.state.remember} text='记住用户名和密码' changeChecked={this.changeChecked.bind(this,'remember')}/></div>*/}
                 <div><a href="">注册账号</a></div>
                 <div><a href="">忘记密码?</a></div>
             </div>
             <div className='protocol flex-box jc-c  ai-c'>
                   <RadioBoxCom checked={this.state.markRead} text='已阅读并同意' changeChecked={this.changeChecked.bind(this,'markRead')}/>
                   <a href="">《用户注册协议》</a>
             </div>
               <div className='button-wrap'>
                <button onClick={this.doLogin.bind(this)}>登录</button>
             </div>
           </div>
        </div>
      </div>
    }
}