import './styles.css';

import {Component} from "react";
import {loadPosts} from "../../utils/load-posts";
import {Posts} from "../Posts";
import {MyButton} from "../Button";


class Index extends Component {
    state = {
        searchValue: '',
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

    loadMorePosts = () => {
        const {
            page,
            postsPerPage,
            allPosts,
            posts
        } = this.state
        const nextPage = page + postsPerPage
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
        posts.push(...nextPosts)
        this.setState({posts, page: nextPage})
    }

    heandleChange = (e) => {
        e.preventDefault()
        const {value} = e.target
        this.setState({searchValue: value})
    }

    render() {
        const {posts, page, postsPerPage, allPosts, searchValue} = this.state
        var texto = ''
        const noMorePosts = page + postsPerPage >= allPosts.length
        noMorePosts ? texto = 'Fim' : texto = 'Mais Posts'
        const findPosts = !!searchValue ?
            allPosts.filter(post => {
                return post.title.toLowerCase().includes(searchValue.toLowerCase())
            })
            : posts
        return (
            <>

                <section className="container">
                    {!!searchValue && (
                        <h2 className="mb-2">Search Value: {searchValue}</h2>
                    )}
                    <input
                        className="mb-3"
                        onChange={this.heandleChange}
                        value={searchValue}
                        type="search"
                    />
                    {findPosts.length > 0 ?
                        <Posts posts={findPosts}/> :
                        <p> Post não encontrado =(</p>}


                    {!searchValue && (
                        <MyButton
                            text={texto}
                            onClick={this.loadMorePosts}
                            disabled={noMorePosts}
                        />
                    )
                    }

                </section>
            </>
        )
    }
}

export default Index;
