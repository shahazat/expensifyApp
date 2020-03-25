//react-test-renderer
import React from 'react';
import Header from '../../components/Header';

//using enzyme 
import {shallow} from 'enzyme';
// import toJson from 'enzyme-to-json';
//import toJson from 'enzyme-to-json'; this is mandatory if you do not specify snapshotSerializers in jest.config.json


test('should render header ', () =>{
    const wrapper = shallow(<Header />);
    //expect(toJson(wrapper)).toMatchSnapshot(); this is mandatory if you do not specify snapshotSerializers in jest.config.json
    expect(wrapper).toMatchSnapshot();
    
    //expect(wrapper.find('h1').length).toBe(1); //we should only have 1 h1 tag 
    //expect(wrapper.find('h1').text()).toBe(1); //we should only have 1 h1 tag 
});

/* 
using react-test-renderer 

import ReactShallowRenderer from 'react-test-renderer/shallow';


test('should render header ', () =>{
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

*/ 