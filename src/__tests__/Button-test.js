import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../app/components/Button';


it('renders correctly', () => {
  var myMock = jest.fn();
  const tree = renderer.create(
    <Button buttonClick={myMock} butVal="5" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

