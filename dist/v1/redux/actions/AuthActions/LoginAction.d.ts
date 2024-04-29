import { UserActionType } from '../../Types';
import { Dispatch } from 'redux';

type formDataType = {
    email: string;
    password: string;
};
export declare const authLogin: (formData: formDataType, CaptchaValue: string) => (dispatch: Dispatch<UserActionType>) => Promise<any>;
export {};
//# sourceMappingURL=LoginAction.d.ts.map