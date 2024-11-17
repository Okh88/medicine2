import React, {Children, createContext,useContext,useState} from "react";

const DataContext = createContext(null);

export function DataProvider({ children }) {
    const [Data, setData] = useState([]);
    const [medicineName, setMedicineName] = useState('');
    const [pillsPerDay, setPillsPerDay] = useState('');
    const [alarmTime1, setAlarmTime1] = useState('');
    const [alarmTime2, setAlarmTime2] = useState('');
    const [newpass, setnewpass] = useState('');

    return (
        <DataContext.Provider value={{
            Data, setData,
            medicineName, setMedicineName,
            pillsPerDay, setPillsPerDay,
            alarmTime1, setAlarmTime1,
            alarmTime2, setAlarmTime2,
            newpass, setnewpass,
        }}>
            {children}
        </DataContext.Provider>
    );
}


export const useData = () => {
    return useContext(DataContext);
  };