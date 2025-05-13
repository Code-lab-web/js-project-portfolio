import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import '@testing-library/jest-dom'
import 'jest'


const Button = styled.button`
  color: red;
`


test('it works', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})
export const snapshot = `
.c0 {
  color: red;
}


<button
  className="c0"
/>
`

// Removed custom expect function to use Jest's built-in expect
