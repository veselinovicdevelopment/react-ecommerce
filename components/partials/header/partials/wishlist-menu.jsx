import React from 'react';
import { connect } from 'react-redux';

import ALink from '~/components/features/alink';

function WishlistMenu ( props ) {
    const { wishlist } = props;

    return (
        <div className="wishlist">
            <ALink href="/shop/wishlist" title="Wishlist">
                <div className="icon">
                    <i className="icon-heart-o"></i>
                    <span className="wishlist-count badge">{ wishlist.length }</span>
                </div>
                <p>Wishlist</p>
            </ALink>
        </div>
    );
}

function mapStateToProps ( state ) {
    return {
        wishlist: state.wishlist.data
    }
}

export default connect( mapStateToProps, {} )( WishlistMenu );