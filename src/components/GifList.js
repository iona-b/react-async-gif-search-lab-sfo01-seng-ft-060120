import React, { Component } from 'react'

class GifList extends Component {

    getGifs = () => {
        return this.props.gifs.map(gif => {
            return <li><img src={gif.url} alt="loading..." /></li>
        })
    }

    render() {

        return(
            <div>
                <ul>
                    {this.getGifs()}
                </ul>
            </div>
        )
    }

}

export default GifList