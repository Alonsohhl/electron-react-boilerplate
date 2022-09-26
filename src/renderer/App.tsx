import React, {
  useState,
  useMemo,
  useEffect,
  SetStateAction,
  useReducer,
} from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { EInput } from './Components/EInput';
import ResInput from './Components/ResInput';
import { IInput, InputsController } from './schema';
import './style.scss';


export const AppContext = React.createContext();
const ErApp = () => {
  const test: IInput = { name: 'Name' };
  const [h1Input, setH1Input] = useState<IInput>({ name: '' });
  const [iFields, setIFields] = useState(new InputsController());

  function reducer(state, udpObj) {
    console.log('reducer function');
    console.log(udpObj);
    return [{ header1: 'headerInput', Header2: 'header2Data' }];
  }
  const objDefault = [{ header1: 'headerInput', Header2: 'header2Data' }];
  const [state, dispatch] = useReducer(reducer, objDefault);

  const controller = {
    udpHeader1: (ele: any, key: any) => {
      console.log('controllando');
      dispatch({ header1: ele, key });
    },
  };

  const [resInput, setResInput] = useState('');
  const onChangeInput = (newState: SetStateAction<IInput>) => {
    setH1Input(newState);
  };
  const providerIFields = useMemo(
    () => ({ iFields, setIFields }),
    [iFields, setIFields]
  );
  return (
    <AppContext.Provider value={controller}>
      <div className="py-2 px-5">
        {/* <div className="h-screen flex items-center justify-center bg-gray-200">
          <h1 className="text-blue-500">Hello Tailwind</h1>
        </div> */}
        {/* taiwind */}
        <div className="inputGroup py-4">
          <input
            type="text"
            name="fUrlBase"
            id="fUrlBase"
            placeholder="Url Base"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header2</th>
              <th>VA URL (base)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {/* <EInput inputData={providerH1Input} /> */}
                <EInput inputData={h1Input} inputSetter={onChangeInput} />
              </td>
              <td>
                <textarea
                  name="fHeader2"
                  id="fHeader2"
                  placeholder="Header 2"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  defaultValue={iFields}
                />
              </td>
              <td>
                <ResInput state={state?.header1} resData={resInput} />
              </td>
            </tr>
          </tbody>
        </table>
        {/* Tailwind End */}
      </div>
    </AppContext.Provider>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ErApp />} />
      </Routes>
    </Router>
  );
}
