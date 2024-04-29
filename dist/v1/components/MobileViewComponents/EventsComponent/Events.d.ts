import { EventType } from '../../../redux/Types';
import { default as React, SetStateAction, Dispatch } from 'react';

type propsType = {
    setIsEditing?: Dispatch<SetStateAction<boolean>>;
    isFormDetailsPage?: boolean;
    eventData?: EventType;
    setUpload?: React.Dispatch<React.SetStateAction<boolean>>;
};
declare const Events: ({ setIsEditing, isFormDetailsPage, eventData, setUpload, }: propsType) => import("react/jsx-runtime").JSX.Element;
export default Events;
//# sourceMappingURL=Events.d.ts.map