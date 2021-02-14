import {render, screen} from '@testing-library/react';
import App from '../App';
import {shallow} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

Enzyme.configure({adapter: new Adapter()});

describe('App Component ', () => {

    it('display the result', function () {
        const  tree = renderer.create(<App/>).toJSON()
        expect(tree).toMatchSnapshot()
    });

    it('should have one provider', function () {
        const  wrapper = shallow(<App/>)
        expect(wrapper.find('Provider')).toHaveLength(1)
    });

    it('should have two div', function () {
        const wrapper = shallow(<App/>)
        expect(wrapper.find('div')).toHaveLength(2)
    });

    it('should have render', function (){
        const wrapper = shallow(<App/>)
        expect(wrapper.render()).toHaveLength(1)
    });

    it('should have one browser router', function (){
        const wrapper = shallow(<App/>)
        expect(wrapper.find('BrowserRouter')).toHaveLength(1)
    })

})

// test('renders learn react link', () => {
//     render(<App/>);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });
