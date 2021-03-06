import React from 'react'
import { shallow } from 'enzyme'
import { assert } from 'chai'

import TriangleFrame from '../src'

describe('react-triangle-frame', () => {
    const Composed = () => (
        <div>
            hello world
        </div>
    )

    it('should render wrapped component', () => {
        const Wrapped = TriangleFrame()(Composed)
        const wrapper = shallow(<Wrapped />)
        assert.ok(
            wrapper.find(Composed),
            'should contain the wrapped component'
        )
    })

    it('should render frame with custom config', () => {
        const Wrapped = TriangleFrame({
            color: 'red',
            borderColor: 'blue',
            style: {
                padding: '10px'
            }
        })(Composed)
        const wrapper = shallow(<Wrapped />)

        assert.strictEqual(
            wrapper.first().node.props.style.backgroundColor,
            'red',
            'should have the frame color set to red'
        )

        assert.strictEqual(
            wrapper.first().node.props.style.borderColor,
            'blue',
            'should have the border color set to blue'
        )

        assert.strictEqual(
            wrapper.first().node.props.style.padding,
            '10px',
            'should have the style overridden by custom config'
        )
    })
})
