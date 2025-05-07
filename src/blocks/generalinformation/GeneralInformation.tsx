import styled from 'styled-components';
import GeneralInfoBlock from '../generalinfoblock/GeneralInfoBlock';

const Body = styled.div`

`

const GeneralInformation = () => {
    return (
        <Body>
            <h1 className='scrollTitle'>General information</h1>
            <GeneralInfoBlock name='Temp max' maininfo='19°' icon='../public/icons/generalinfo/max-temp.svg'/>
            <GeneralInfoBlock name='Temp min' maininfo='15°' icon='../public/icons/generalinfo/min-temp.svg'/>
            <GeneralInfoBlock name='Humadity' maininfo='58%' icon='../public/icons/generalinfo/humidity.svg'/>
            <GeneralInfoBlock name='Cloudy' maininfo='86%' icon='../public/icons/generalinfo/cloudiness.svg'/>
            <GeneralInfoBlock name='Wind' maininfo='5km/h°' icon='../public/icons/generalinfo/wind.svg'/>
        </Body>
    );
};

export default GeneralInformation;