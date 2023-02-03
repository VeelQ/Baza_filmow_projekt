import React, {Component} from "react";
import MoviesAlbum from "./moviesAlbum";
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";
import _ from 'lodash';
const axios = require('axios');


class Movies extends Component {

   constructor(props) {
       super(props);
       this.state = {
           error: null,
           isLoaded: false,
           items: [],
           pageSize: 12,
           currentPage: 1,
           sortColumn: {path: 'title', order: 'asc'}
       };
    }

    componentDidMount() {
        axios({method:'get',url:'https://at.usermd.net/api/movies'})
        .then((result) => {
            this.setState({
                isLoaded: true,
                items: result.data
            });
            
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
            console.error('Something went wrong during fetching movies')
        })
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    };

    render() {
        const { items, pageSize, currentPage, sortColumn } = this.state;
        
        if (!items.length) {
            return <p>No movies</p>
        }
        
        const sorted = _.orderBy(items, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);
 
        return (
            <React.Fragment>
                <MoviesAlbum
                    items={movies}
                    sortIcon={this.renderSortIcon}
                    onDelete={this.handleDelete}
                    onSort={this.handleSort}
                    />
                <Pagination
                    itemsCount = {items.length}
                    pageSize = {this.state.pageSize}

                    currentPage = {this.state.currentPage}
                    onPageChange = {this.handlePageChange}
                />
                </React.Fragment>
        )
    }
 }
 
 export default Movies;
 