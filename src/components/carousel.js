import React from 'react';


class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            active: 0
        }
//this can be removed by converting the handleIndexClick function to arrow function.
//This will make the contex of "this" to be Casousel and not window or DOM 
        this.handleIndexClick = this.handleIndexClick.bind(this);
    }

    // static getDerivedStateFromProps({ media }){
    //     let photos=['http://placecorgi.com/600/600'];

    //     if(media.length){
    //         photos = media.map(({ larger })=> larger);
    //     }

    //     return { photos };
    // }
    handleIndexClick(event) {
        this.setState({
            active: +event.target.dataset.index
        })
    }
    render() {
        const { photos, active } = this.state;
        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal" />
                <div className="carousel-smaller">
                    {this.props.media.map((photo, index) => {
                       return <img
                            key={photo.large}
                            onClick={this.handleIndexClick}
                            data-index={index}
                            src={photo.large}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    })}
                </div>
            </div>
        )
    }
}

export default Carousel;