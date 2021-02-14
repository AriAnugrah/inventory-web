import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {shallow} from "enzyme";
import {UnitList} from "../pages";
import configureMockStore from 'redux-mock-store';


const mockStore = configureMockStore();

describe('Unit List Component', () => {
    let wrapper;
    let store;

    beforeEach(() => {

        const initialState = {
            findAllUnit: {
                data: null,
                loading: false,
                error: null
            },
            removeUnitById: {
                data: null,
                loading: false,
                error: null
            }
        }

        store = mockStore(initialState)
        wrapper = shallow(<UnitList store={store}/>).dive()
    })

    it('should return the data state', () => {
        expect(wrapper.props().units).toStrictEqual([])
    })

    it('should return loading [] from state',()=>{
        expect(wrapper.props().isLoading).toBe(false)
    })

    it('should have one div', ()=>{
        const component = shallow(<unitList/>)
        expect(component.find('div')).toHaveLength(0)
    })
})