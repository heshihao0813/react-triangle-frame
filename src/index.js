import React from 'react'

const getStyles = (color, borderColor, position) => {
    const top = position === 'top'
    const bottom = position === 'bottom'
    const left = position === 'left'
    const right = position === 'right'
    const side = left || right

    return {
        box: {
            position: 'relative',
            backgroundColor: color,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor,
            boxShadow: '0 3px 12px rgba(0, 0, 0, 0.15)',
            borderRadius: '4px',
            padding: '5px',
            lineHeight: 0
        },

        triangleContainer: {
            position: 'absolute',
            display: side ? 'inline-block' : 'block',
            verticalAlign: 'top',
            top: top ? 0 : 'initial',
            bottom: bottom ? 0 : 'initial',
            left: top || bottom ? '5px' : left ? '-14px' : 'initial',
            right: right ? 0 : 'initial'
        },

        triangle: {
            position: 'absolute',
            border: '7px solid transparent',
            borderBottomColor: top ? color : 'transparent',
            borderTopColor: bottom ? color : 'transparent',
            borderRightColor: left ? color : 'transparent',
            borderLeftColor: right ? color : 'transparent',
            top: top ? '-14px' : 0,
            left: !side ? '1px' : 0
        },

        triangleShadow: {
            position: 'absolute',
            border: '8px solid transparent',
            borderBottomColor: top ? borderColor : 'transparent',
            borderTopColor: bottom ? borderColor : 'transparent',
            borderRightColor: left ? borderColor : 'transparent',
            borderLeftColor: right ? borderColor : 'transparent',
            top: top ? '-16px' : bottom ? 0 : '-1px',
            left: left ? '-2px' : 0
        }
    }
}

const TriangleFrame = config => {
    const {
        color='#fff',
        borderColor='rgba(0, 0, 0, 0.15)',
        position='top'
    } = config || {}
    const styles = getStyles(color, borderColor, position)

    return ComposedComponent => props => {
        return (
            <div style={styles.box}>
                <div style={styles.triangleContainer}>
                    <div style={styles.triangleShadow} />
                    <div style={styles.triangle} />
                </div>
                <ComposedComponent {...props} />
            </div>
        )
    }
}

export default TriangleFrame
