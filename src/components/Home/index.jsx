import './styles.css';

import {Component} from "react";
import {loadPosts} from "../../utils/load-posts";
import {Posts} from "../Posts";
import {MyButton} from "../Button";


class Index extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 15
    }

    async componentDidMount() {
        await this.loadPost()
    }

    loadPost = async () => {

        const {page, postsPerPage} = this.state

        const postAndPhotos = await loadPosts()
        this.setState({
            posts: postAndPhotos.slice(page, postsPerPage),
            allPosts: postAndPhotos
        })

    }

    loadMorePosts = ()=>{
        const {
            page,
            postsPerPage,
            allPosts,
            posts
        } = this.state
        const nextPage = page + postsPerPage
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
        posts.push(...nextPosts)
        this.setState({posts , page: nextPage})
    }

    render() {
        const {posts, page, postsPerPage, allPosts} = this.state
        var texto = ''
        const noMorePosts = page + postsPerPage >= allPosts.length
        if (noMorePosts){
            texto = 'Fim'
        }else {

            texto = 'Mais Posts'
        }

        return (
            <section className="container">
                <Posts posts={posts}/>
                <MyButton
                    text={texto}
                    onClick={this.loadMorePosts}
                    disabled = {noMorePosts}
                />

            </section>
        )
    }
}

export default Index;
