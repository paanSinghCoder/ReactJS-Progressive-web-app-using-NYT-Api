import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PostCard from '../postCard/PostCard';
import Grid from '@material-ui/core/Grid';

class Posts extends Component {
    state = {
          apiUrlStart: 'https://api.nytimes.com/svc/topstories/v2/',
          apiUrlEnd: '.json?api-key=',
          apiKey: 'YYBOLHhzDP8ArfpU4Li4OJqswsKIQGRf',
          articles: [],
          isLoaded: false,
          networkError: false
        }
    componentWillMount(){
        fetch(this.state.apiUrlStart + this.props.token + this.state.apiUrlEnd + this.state.apiKey)
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
    render(props) {
        return (
            <div>
                {!this.state.isLoaded ? 
                    !this.state.networkError ? <CircularProgress /> : <div>You are offline(No cache to serve).</div>
                : 
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            {(this.state.articles).map(value => (
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
                </Grid>
                }
                
            </div>
        )
    }
}

export default Posts;
