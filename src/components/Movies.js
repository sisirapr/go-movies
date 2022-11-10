import React, { Component, Fragment } from "react";

export default class Movies extends Component{
    state = { movies: [] };

    componentDidMount() {
        this.setState({
            movies: [
                {id:1, title:"The shawshank Redemption", runtime: 142},
                {id:2, title:"Iron Man 2",runtime:120},
                {id:3, title:"The Godfather",runtime:175},
            ]
        })
    }
    render() {
        return (
            <Fragment>
                <h2>Choose a movie</h2>
                <ul>
                    {this.state.movies.map((m) => (
                        <li key={m.id}>
                            {m.title}
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}