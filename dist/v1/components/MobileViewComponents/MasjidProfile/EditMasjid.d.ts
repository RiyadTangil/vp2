import { Masjid } from '../../../redux/Types';
import { Dispatch, SetStateAction, FC } from 'react';

interface EditMasjidProps {
    masjid: Masjid;
    openMasjidEdit: boolean;
    setOpenMasjidEdit: Dispatch<SetStateAction<boolean>>;
    masjidId: string;
    masjidReloader: () => void;
}
declare const EditMasjid: FC<EditMasjidProps>;
export default EditMasjid;
//# sourceMappingURL=EditMasjid.d.ts.map