import React from 'react';
import { ViewSemDespertador, TextSemDespertador } from './styled';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CardSemDespertador(){
    return(
        <ViewSemDespertador>
            <MaterialCommunityIcons name="clock-digital" size={65} color="white" />
            <TextSemDespertador>
                Nenhum alarme ainda foi criado!
            </TextSemDespertador>
        </ViewSemDespertador>
    );
}