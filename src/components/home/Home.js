import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import PostCard from '../postCard/PostCard';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Home extends React.Component {
  
state = {
    isLoaded: false,
    apiKey: 'YYBOLHhzDP8ArfpU4Li4OJqswsKIQGRf',
    apiUrl: 'https://api.nytimes.com/svc/topstories/v2/business.json?api-key=',
    articles: [],
    networkError: false,
    url: 'https://static01.nyt.com/images/2019/06/12/science/12NIH/merlin_153372960_8f36b08e-0210-4efe-9848-f25455320b28-superJumbo.jpg'
  }
  
  componentDidMount(){
    this.fetchData();
  }

  fetchData = () => {
    this.setState({
      isLoaded: false
    });
    fetch(this.state.apiUrl + this.state.apiKey)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          articles: data.results,
          isLoaded: true
        });
      }).catch(() => {
        this.setState({
            networkError: true
        })
    });
  }
render(){
    return (
        <div>
          {!this.state.isLoaded ? 
                    !this.state.networkError ? <CircularProgress /> : <div>You are offline(No cache to serve).<Button aria-label='Retry' color='primary' onClick={this.fetchData}>Retry</Button></div>
                : 
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Paper className='home-heading' style={{marginRight:'75px',marginLeft:'75px',padding:'10px'}}>
                        <b><span role='img' aria-label='Fire'>🔥Top Stories</span></b>
                        <Button aria-label='Refresh' color='primary' onClick={this.fetchData}>
                          <span role='img' aria-label='Refresh'>🔄</span>
                        </Button>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            {(this.state.articles).slice(0,6).map(value => (
                            <Grid key={value.title} item>
                                <PostCard 
                                    title={value.title} 
                                    abstract={value.abstract} 
                                    author={value.byline} 
                                    publishedDate={value.published_date} 
                                    multimediaArray={value.multimedia} 
                                    section={value.section}
                                    articleUrl={value.url}
                                    />
                            </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper className='home-heading' style={{marginRight:'75px',marginLeft:'75px',padding:'20px'}}>
                        NYT PWA. Made with <span role='img' aria-label='heart'>❤️</span> and <span role='img' aria-label='coffee'>☕</span> in India. Checkout my <a href='https://github.com/gaurav3017' target='_blank' rel="noopener noreferrer">Github</a>.
                      </Paper>
                    </Grid>
                </Grid>
                }
        </div>
      );
    }
}
  

export default Home;