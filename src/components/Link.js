import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
    // console.log(active, children, onClick);
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a
            href="{0}"
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link
