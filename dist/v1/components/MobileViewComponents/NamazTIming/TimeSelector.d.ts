import { EnteredData } from './NamazTImings';
import { Dispatch, SetStateAction } from 'react';

type propsType = {
    setEnteredData: Dispatch<SetStateAction<EnteredData>>;
    enteredData: EnteredData;
    timeSetter: Dispatch<SetStateAction<string>>;
    label: string;
    nonHanafyAsr: string;
    prayerName: string;
    solarHanafyAsr: string;
    prayerTimeType?: string;
};
declare const TimeSelector: ({ setEnteredData, enteredData, label, nonHanafyAsr, solarHanafyAsr, prayerName, prayerTimeType, }: propsType) => import("react/jsx-runtime").JSX.Element;
export default TimeSelector;
//# sourceMappingURL=TimeSelector.d.ts.map