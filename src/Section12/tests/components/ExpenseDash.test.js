import React from 'react';
import ExpensDashBoaedPage from '../../components/ExpensDash';
import { shallow } from 'enzyme';

test('Should test ExpensDashBoaedPage ', ()=>{
    //export const ExpenseLisItem = ({ dispatch, id, description, amount, createdAt }) => {

    const wrapper = shallow(<ExpensDashBoaedPage />);
    expect(wrapper).toMatchSnapshot();
});