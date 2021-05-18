import React from 'react';
import Drawers from '../../components/Drawer/Drawer';
import { FormDialog } from '../../components/Modal/Modal';
import FormPerfil from '../../components/FormPerfil/FormPerfil';
import {useMiPerfilStyle} from '../../core/styles/MiPerfil/MiPerfilStyle';

export const MiPerfil = () => {
   

    return (
        <div>
            <Drawers />
            <FormPerfil/>
            <FormDialog />
        </div>
    );
};
