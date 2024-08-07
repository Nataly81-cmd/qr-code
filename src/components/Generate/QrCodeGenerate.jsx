import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';

import s from'./qrCodeGenerate.module.css';

import { GENERATE_DATA } from '../../constants';

const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    
    const onClickHander = (event) => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
       
        localStorage.setItem(
            GENERATE_DATA, 
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue('');
    }

    const onChangeHander = (event) => {
        setValue(event.target.value);
        setResult('');
    }        

    return (
        <div className = {s.container}>
            <input 
                type="text" 
                value={value} 
                onChange={onChangeHander} 
                placeholder="Введите текст..."
                className={s.input} 
            />
            <button type="button" className = {s.button} onClick={onClickHander}>Сгенерировать qr-код</button>
           
            {result !== '' && (
                <div className="qrWrapper">
                    <QRCodeSVG value={result} size ={200} />
                </div>
            )}
        </div>
    );
};

export { QrCodeGenerator };