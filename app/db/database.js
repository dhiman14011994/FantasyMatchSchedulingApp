import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'MatchSchedulerDB', location: 'default' });

export const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Schedule (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        day TEXT,
        startTime TEXT,
        endTime TEXT
      );`
    );
  });
};

export const addSlot = (day, startTime, endTime) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO Schedule (day, startTime, endTime) VALUES (?, ?, ?);`,
      [day, startTime, endTime]
    );
  });
};

export const fetchSlots = callback => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM Schedule;`,
      [],
      (_, { rows }) => callback(rows.raw()),
      error => console.log('Error fetching slots: ', error)
    );
  });
};
