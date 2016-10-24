import React from 'react'
import { render } from 'react-dom'

import TriangleFrame from 'react-triangle-frame'

const Test = TriangleFrame()(() => (
    <div style={{
        padding: '20px'
    }}>
        hello world
    </div>
))

render(
    <Test />,
    document.getElementById('app')
)
