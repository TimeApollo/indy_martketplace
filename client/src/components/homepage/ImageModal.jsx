import React from 'react';
import { connect } from 'react-redux';

import { exitImgPopup } from "../../actions/art";

import './style.css';

class ImageModal extends React.Component {
    render() {
        const artwork = this.props.artwork;

        return (
            <div className="img-popup" onClick={ () => this.props.exitImgPopup() }>
                <div className="img-wrap">
                    <div className="img-date">
                        <div className="date">{artwork.date}</div>
                        <div className="image-div">
                            <img src={artwork.url} alt={artwork.title} className="image"/>
                        </div>
                    </div>
                    <div className="info-wrap">
                        <div className="art-info">
                            <div className="name">
                                <div className="art-name">{artwork.title}</div>
                                <div className="artist">
                                    <div className="artist-link">{artwork.artist}</div>
                                    <div className="artist-dir">(Click to view artist profile)</div>
                                </div>
                            </div>
                            {artwork.forSale 
                                ? <div className="for-sale">For Sale</div>
                                : <div className="not-sale">Not For Sale</div>}
                        </div>
                        <hr/>
                        <div className="art-type">
                            <div className="medium"><b>Medium:</b> {artwork.medium}</div>
                            <div className="style-list"><b>Styles:</b> {artwork.styles.map(style =>
                                <span className="style">{style}, </span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({art}) => ({
    artwork: art.singleArt
})

const mapDispatchToProps = ( dispatch ) => {
    return {
        exitImgPopup: () => dispatch(exitImgPopup())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageModal);
