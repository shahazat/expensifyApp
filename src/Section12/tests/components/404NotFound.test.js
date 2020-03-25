import React from 'react';
import NotFoundPage from '../../components/404NotFound';
import { shallow } from 'enzyme';

test('Should test NotFoundPage ', ()=>{
    //export const ExpenseLisItem = ({ dispatch, id, description, amount, createdAt }) => {

    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});