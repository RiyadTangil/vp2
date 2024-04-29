import { EventType } from '../../../redux/Types';
import { Dispatch, SetStateAction } from 'react';

type propsType = {
    OpenOn: boolean;
    setIsEditing: Dispatch<SetStateAction<boolean>>;
    eventData: EventType;
};
declare const EventModal: ({ OpenOn, setIsEditing, eventData }: propsType) => import("react/jsx-runtime").JSX.Element;
export default EventModal;
//# sourceMappingURL=EventModal.d.ts.map