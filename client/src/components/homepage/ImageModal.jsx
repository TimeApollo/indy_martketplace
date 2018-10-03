import React from 'react';
import { connect } from 'react-redux';

import { exitImgPopup } from "../../actions/art";

import './style.css';

class ImageModal extends React.Component {
    render() {
        const artwork = this.props.artwork[0];

        return (
            <div className="img-popup" onClick={ () => this.props.exitImgPopup() }>
                <div className="img-wrap">
                    <div className="img-date">
                        <div className="date">{artwork.date}</div>
                        <img src={artwork.url} alt={artwork.title} className="image"/>
                    </div>
                    <div className="info-wrap">
                        <div className="art-info">
                            <div className="name">
                                <div className="art-name">{artwork.title}</div>
                                <div className="artist">{artwork.artist}</div>
                            </div>
                            {artwork.forSale && <div className="for-sale">For Sale!</div>}
                        </div>
                        <div className="art-type">
                            <div className="medium">Medium: {artwork.medium}</div>
                            <div className="style-list">Styles: {artwork.styles.map(style =>
                                <span className="style">{style}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({art}) => ({
    artwork: art.artwork
})

const mapDispatchToProps = ( dispatch ) => {
    return {
        exitImgPopup: () => dispatch(exitImgPopup())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageModal);
