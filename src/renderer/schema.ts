/* eslint-disable prettier/prettier */
export const defaultInput = {
  'Header1': 'string',
}

export interface IInput {
    name: string
    value?: string
}

export class InputsController {
    h1 :IInput;

    h2 :IInput;

    res: IInput

    constructor(){
        this.h1 = { name: 'Header 1' };
        this.h2 = { name: 'Header 2' };
        this.res = { name: 'Result'}
    }
}

export default defaultInput;
