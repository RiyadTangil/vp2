import { TileDisabledFunc } from 'react-calendar';
import { default as React } from 'react';

interface CustomCalenderProps {
    onDateSelect: (selectedDate: Date) => void;
    value: Date;
    setValue: React.Dispatch<React.SetStateAction<Date>>;
    tileContent?: ({ date }: {
        date: any;
    }) => React.ReactNode;
    minDate?: Date;
    tileDisabled: TileDisabledFunc;
}
declare function CustomCalender({ onDateSelect, value, setValue, tileContent, minDate, tileDisabled, }: CustomCalenderProps): import("react/jsx-runtime").JSX.Element;
export default CustomCalender;
//# sourceMappingURL=CustomCalender.d.ts.map