class HomePage extends  React.Component{
  constructor(props){
      super(props);
      this.state={
          homeRouterItems:[] ,

      }
  }
    componentWillMount(){
         var homeItems=[
             {url:'/users/my/agenda',className:'icon_agenda',icon:'icon_agenda.png',title:'待办事项',nav:'my_agenda'},
             {url:'/users/my/blog',className:'icon_blog',icon:'icon_blog.png',title:'我的博客',nav:'my_blog'},
             {url:'/users/my/draft',className:'icon_draft',icon:'icon_draft.png',title:'我的草稿',nav:'my_draft'},
         ]
        this.setState({homeRouterItems:homeItems});
    }
    componentDidMount(){

    }

    render(){
      return <Layout className='homePage' crumb='crumb' title={'首页'} navRouterItems={this.state.navRouterItems} nav={'user_home'}>
       home page
      </Layout>
    }
}